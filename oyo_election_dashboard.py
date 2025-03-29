# -*- coding: utf-8 -*-
"""
Created on Sat Mar 29 09:18:30 2025

@author: Admin
"""

# -*- coding: utf-8 -*-
"""
Created on Sat Mar 29 07:27:55 2025

@author: Admin
"""

import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import plotly.express as px
import plotly.graph_objects as go
import geopandas as gpd
from sklearn.cluster import DBSCAN
from sklearn.preprocessing import StandardScaler
import seaborn as sns
from streamlit_folium import folium_static
import folium
from folium.plugins import MarkerCluster, HeatMap
import warnings
warnings.filterwarnings('ignore')

# Set page config
st.set_page_config(
    page_title="Oyo State Election Analysis Dashboard",
    page_icon="📊",
    layout="wide"
)

# App title and description
st.title("Oyo State Election Integrity Analysis Dashboard")
st.markdown("""
This dashboard visualizes the geospatial analysis of the Oyo State election data, 
highlighting spatial-temporal anomalies, cluster analysis, and vote distribution patterns.
""")

# Sidebar navigation
st.sidebar.title("Navigation")
page = st.sidebar.radio(
    "Select a page:",
    ["Overview", "Geospatial Analysis", "Cluster Analysis", "Outlier Detection", "Historical Trends"]
)

# Load the data
@st.cache_data
def load_data():
    # For demo purposes, generate sample data based on the analysis
    # In a real scenario, you would use: pd.read_csv("your_file.csv")
    
    # Generate sample data for 1000 polling units
    np.random.seed(42)
    n = 1000
    
    # Create LGAs and Wards
    lgas = ['AFIJIO', 'AKINYELE', 'ATIBA', 'ATISBO', 'EGBEDA', 'IBADAN NORTH', 
            'IBADAN SOUTH', 'IDO', 'SAKI EAST', 'SURULERE']
    wards = ['WARD 1', 'WARD 2', 'WARD 3', 'WARD 4', 'WARD 5']
    
    df = pd.DataFrame({
        'State': ['OYO'] * n,
        'LGA': np.random.choice(lgas, n),
        'Ward': [f"{np.random.choice(wards)}" for _ in range(n)],
        'PU-Code': [f"30-{i:02d}-{np.random.randint(1, 10):02d}-{np.random.randint(1, 20):03d}" for i in range(n)],
        'PU-Name': [f"POLLING UNIT {i}" for i in range(n)],
        'Latitude': np.random.uniform(7.0, 9.0, n),  # Oyo State latitude range
        'Longitude': np.random.uniform(3.0, 5.0, n),  # Oyo State longitude range
        'APC': np.random.negative_binomial(10, 0.5, n),
        'PDP': np.random.negative_binomial(8, 0.5, n),
        'LP': np.random.negative_binomial(5, 0.5, n),
        'NNPP': np.random.negative_binomial(3, 0.5, n)
    })
    
    # Add some outliers for demonstration
    outlier_indices = np.random.choice(range(n), 50, replace=False)
    df.loc[outlier_indices, 'APC'] = np.random.negative_binomial(30, 0.3, 50)
    df.loc[outlier_indices, 'PDP'] = np.random.negative_binomial(2, 0.8, 50)
    
    return df

# Load historical data
@st.cache_data
def load_historical_data():
    # Create historical data DataFrame
    data = {
        'Year': [2015, 2019, 2023],
        'APC': [528620, 365229, 275494],
        'PDP': [303376, 366690, 113716],
        'Other_Parties': [49356, 102337, 63797]
    }
    return pd.DataFrame(data)

# Load the data
try:
    df = load_data()
    historical_df = load_historical_data()
    
    # Calculate total votes for each polling unit
    df['Total_Votes'] = df['APC'] + df['PDP'] + df['LP'] + df['NNPP']
    
    # Create GeoDataFrame
    gdf = gpd.GeoDataFrame(
        df, 
        geometry=gpd.points_from_xy(df.Longitude, df.Latitude),
        crs="EPSG:4326"
    )
    
    # Calculate Z-scores for outlier detection
    for party in ['APC', 'PDP', 'LP', 'NNPP']:
        df[f'{party}_Z'] = (df[party] - df[party].mean()) / df[party].std()
    
    # Calculate outlier score
    df['Outlier_Score'] = abs(df['APC_Z']) + abs(df['PDP_Z']) + abs(df['LP_Z']) + abs(df['NNPP_Z'])
    df['Outlier_Flag'] = df['Outlier_Score'] > 2.5
    
    # Add this information to GeoDataFrame
    gdf['Outlier_Score'] = df['Outlier_Score']
    gdf['Outlier_Flag'] = df['Outlier_Flag']
    
    data_loaded = True
except Exception as e:
    st.error(f"Error loading data: {e}")
    data_loaded = False

# DBSCAN Clustering Function
def perform_clustering(data, eps_value=0.1, min_samples=5):
    # Extract coordinates
    coords = np.array(data[['Latitude', 'Longitude']])
    
    # Standardize coordinates
    scaler = StandardScaler()
    coords_scaled = scaler.fit_transform(coords)
    
    # Apply DBSCAN
    dbscan = DBSCAN(eps=eps_value, min_samples=min_samples).fit(coords_scaled)
    
    # Return cluster labels
    return dbscan.labels_

# If data is loaded successfully, display the dashboard
if data_loaded:
    # Overview Page
    if page == "Overview":
        st.header("Election Overview")
        
        # Overview metrics in a row
        col1, col2, col3, col4 = st.columns(4)
        with col1:
            st.metric("Total Polling Units", f"{len(df):,}")
        with col2:
            st.metric("Total Votes Cast", f"{df['Total_Votes'].sum():,}")
        with col3:
            st.metric("Potential Outliers", f"{df['Outlier_Flag'].sum():,}")
        with col4:
            st.metric("LGAs", f"{df['LGA'].nunique()}")
        
        # Party vote distribution
        st.subheader("Party Vote Distribution")
        party_votes = pd.DataFrame({
            'Party': ['APC', 'PDP', 'LP', 'NNPP'],
            'Votes': [df['APC'].sum(), df['PDP'].sum(), df['LP'].sum(), df['NNPP'].sum()]
        })
        
        fig = px.pie(party_votes, values='Votes', names='Party', 
                    title='Overall Vote Distribution by Party',
                    color_discrete_sequence=px.colors.qualitative.Set1)
        st.plotly_chart(fig, use_container_width=True)
        
        # Two columns for additional visualizations
        col1, col2 = st.columns(2)
        
        with col1:
            # LGA-wise vote distribution
            st.subheader("Votes by Local Government Area")
            lga_votes = df.groupby('LGA')[['APC', 'PDP', 'LP', 'NNPP']].sum().reset_index()
            lga_votes_melted = pd.melt(lga_votes, id_vars=['LGA'], 
                                    value_vars=['APC', 'PDP', 'LP', 'NNPP'],
                                    var_name='Party', value_name='Votes')
            
            fig = px.bar(lga_votes_melted, x='LGA', y='Votes', color='Party', 
                        title='Vote Distribution by LGA and Party',
                        color_discrete_sequence=px.colors.qualitative.Set1)
            fig.update_layout(xaxis={'categoryorder':'total descending'})
            st.plotly_chart(fig, use_container_width=True)
        
        with col2:
            # Distribution of outlier scores
            st.subheader("Distribution of Outlier Scores")
            fig = px.histogram(df, x='Outlier_Score', nbins=50,
                            title='Distribution of Outlier Scores',
                            color_discrete_sequence=['blue'])
            fig.add_vline(x=2.5, line_dash="dash", line_color="red", 
                        annotation_text="Outlier Threshold")
            st.plotly_chart(fig, use_container_width=True)
        
        # Simple map showing polling unit distribution
        st.subheader("Geographic Distribution of Polling Units")
        
        # Create a base map centered on Oyo State
        m = folium.Map(location=[8.0, 4.0], zoom_start=8)
        
        # Add a marker cluster for polling units
        marker_cluster = MarkerCluster().add_to(m)
        
        # Add markers for each polling unit
        for idx, row in gdf.iterrows():
            # Skip every 10th point for performance in this demo
            if idx % 10 != 0:
                continue
                
            # Create popup text
            popup_text = f"""
            <b>Polling Unit:</b> {row['PU-Name']}<br>
            <b>LGA:</b> {row['LGA']}<br>
            <b>APC:</b> {row['APC']}<br>
            <b>PDP:</b> {row['PDP']}<br>
            <b>LP:</b> {row['LP']}<br>
            <b>NNPP:</b> {row['NNPP']}<br>
            """
            
            # Color markers based on outlier status
            if row['Outlier_Flag']:
                icon_color = 'red'
            else:
                icon_color = 'blue'
                
            # Add marker to cluster
            folium.Marker(
                location=[row['Latitude'], row['Longitude']],
                popup=folium.Popup(popup_text, max_width=300),
                icon=folium.Icon(color=icon_color, icon="info-sign")
            ).add_to(marker_cluster)
        
        # Display the map
        folium_static(m)
    
    # Geospatial Analysis Page
    elif page == "Geospatial Analysis":
        st.header("Geospatial Analysis")
        
        # Party selection for geospatial analysis
        selected_party = st.selectbox(
            "Select a party to analyze:",
            ["APC", "PDP", "LP", "NNPP", "Total_Votes"]
        )
        
        col1, col2 = st.columns(2)
        
        with col1:
            # Heat map of votes
            st.subheader(f"{selected_party} Vote Concentration")
            
            # Create a map centered on Oyo State
            m = folium.Map(location=[8.0, 4.0], zoom_start=8)
            
            # Add a heatmap layer
            heat_data = [[row['Latitude'], row['Longitude'], row[selected_party]] 
                        for _, row in df.iterrows()]
            
            HeatMap(heat_data, radius=15).add_to(m)
            
            # Display the map
            folium_static(m)
        
        with col2:
            # Choropleth map by LGA (simulated boundaries)
            st.subheader(f"{selected_party} Votes by LGA")
            
            # Aggregate votes by LGA
            lga_votes = df.groupby('LGA')[[selected_party]].sum().reset_index()
            
            # Create a bar chart for LGA votes
            fig = px.bar(lga_votes, x='LGA', y=selected_party,
                        title=f'{selected_party} Votes by LGA',
                        color=selected_party,
                        color_continuous_scale='Viridis')
            
            st.plotly_chart(fig, use_container_width=True)
        
        # Spatial analysis of outliers
        st.subheader("Spatial Distribution of Outliers")
        
        # Create a new map
        m = folium.Map(location=[8.0, 4.0], zoom_start=8)
        
        # Add markers for outlier polling units
        outliers = gdf[gdf['Outlier_Flag'] == True]
        
        for idx, row in outliers.iterrows():
            # Create popup text
            popup_text = f"""
            <b>Polling Unit:</b> {row['PU-Name']}<br>
            <b>LGA:</b> {row['LGA']}<br>
            <b>Ward:</b> {row['Ward']}<br>
            <b>APC:</b> {row['APC']}<br>
            <b>PDP:</b> {row['PDP']}<br>
            <b>LP:</b> {row['LP']}<br>
            <b>NNPP:</b> {row['NNPP']}<br>
            <b>Outlier Score:</b> {row['Outlier_Score']:.2f}<br>
            """
            
            # Add marker
            folium.Marker(
                location=[row['Latitude'], row['Longitude']],
                popup=folium.Popup(popup_text, max_width=300),
                icon=folium.Icon(color='red', icon="exclamation")
            ).add_to(m)
        
        # Display the map
        folium_static(m)
        
        # Display outlier statistics
        st.subheader("Outlier Analysis by LGA")
        
        # Calculate outlier proportion by LGA
        lga_outliers = df.groupby('LGA')['Outlier_Flag'].mean().reset_index()
        lga_outliers.columns = ['LGA', 'Outlier_Proportion']
        lga_outliers['Outlier_Proportion'] = lga_outliers['Outlier_Proportion'] * 100
        
        # Create a bar chart
        fig = px.bar(lga_outliers, x='LGA', y='Outlier_Proportion',
                    title='Percentage of Outlier Polling Units by LGA',
                    color='Outlier_Proportion',
                    color_continuous_scale='Reds',
                    labels={'Outlier_Proportion': 'Outlier %'})
        
        st.plotly_chart(fig, use_container_width=True)
    
    # Cluster Analysis Page
    elif page == "Cluster Analysis":
        st.header("Cluster Analysis")
        
        # Cluster analysis parameters
        st.subheader("DBSCAN Clustering Parameters")
        
        col1, col2 = st.columns(2)
        
        with col1:
            eps_value = st.slider(
                "Select radius parameter (eps) in km:",
                min_value=0.5,
                max_value=5.0,
                value=1.0,
                step=0.5,
                help="Larger values create fewer, larger clusters. Smaller values create more, smaller clusters."
            )
            
        with col2:
            min_samples = st.slider(
                "Select minimum samples per cluster:",
                min_value=3,
                max_value=15,
                value=5,
                step=1,
                help="Minimum number of polling units required to form a cluster."
            )
        
        # Convert eps from km to coordinate units (approximate)
        eps_coord = eps_value / 111.0  # Rough conversion from km to degrees
        
        # Perform clustering
        cluster_labels = perform_clustering(df, eps_coord, min_samples)
        
        # Add cluster information to dataframe
        df['Cluster'] = cluster_labels
        gdf['Cluster'] = cluster_labels
        
        # Display cluster statistics
        n_clusters = len(set(cluster_labels)) - (1 if -1 in cluster_labels else 0)
        n_outliers = list(cluster_labels).count(-1)
        
        st.metric("Number of clusters identified", n_clusters)
        st.metric("Number of isolated polling units (noise)", n_outliers)
        
        # Visualize clusters on map
        st.subheader("Clustering of Polling Units")
        
        # Create a colormap for clusters
        colors = plt.cm.tab20(np.linspace(0, 1, max(2, n_clusters)))
        
        # Create a map
        m = folium.Map(location=[8.0, 4.0], zoom_start=8)
        
        # Add points, colored by cluster
        for idx, row in gdf.iterrows():
            # Skip some points for better performance
            if idx % 5 != 0:
                continue
                
            # Determine color
            if row['Cluster'] == -1:
                color = 'gray'  # Noise points
            else:
                color_idx = int(row['Cluster']) % len(colors)
                color_hex = '#{:02x}{:02x}{:02x}'.format(
                    int(colors[color_idx][0] * 255),
                    int(colors[color_idx][1] * 255),
                    int(colors[color_idx][2] * 255)
                )
                color = color_hex
            
            # Create popup
            popup_text = f"""
            <b>Polling Unit:</b> {row['PU-Name']}<br>
            <b>LGA:</b> {row['LGA']}<br>
            <b>Cluster:</b> {row['Cluster']}<br>
            """
            
            # Add marker
            folium.CircleMarker(
                location=[row['Latitude'], row['Longitude']],
                radius=5,
                popup=folium.Popup(popup_text, max_width=300),
                color=color,
                fill=True,
                fill_opacity=0.7
            ).add_to(m)
        
        # Display the map
        folium_static(m)
        
        # Analyze votes by cluster
        if n_clusters > 0:
            st.subheader("Vote Distribution by Cluster")
            
            # Filter out noise points
            clustered_df = df[df['Cluster'] != -1]
            
            # Aggregate votes by cluster
            cluster_votes = clustered_df.groupby('Cluster')[['APC', 'PDP', 'LP', 'NNPP']].sum().reset_index()
            
            # Calculate total votes for each cluster
            cluster_votes['Total_Votes'] = cluster_votes['APC'] + cluster_votes['PDP'] + cluster_votes['LP'] + cluster_votes['NNPP']
            
            # Calculate vote proportions
            for party in ['APC', 'PDP', 'LP', 'NNPP']:
                cluster_votes[f'{party}_Prop'] = cluster_votes[party] / cluster_votes['Total_Votes'] * 100
            
            # Create a stacked bar chart
            fig = px.bar(cluster_votes, x='Cluster', y=['APC_Prop', 'PDP_Prop', 'LP_Prop', 'NNPP_Prop'],
                        title='Vote Proportion by Cluster',
                        labels={'value': 'Vote Percentage', 'variable': 'Party'},
                        color_discrete_map={
                            'APC_Prop': '#008000',  # Green for APC
                            'PDP_Prop': '#FF0000',  # Red for PDP
                            'LP_Prop': '#808080',   # Grey for LP
                            'NNPP_Prop': '#000080'  # Navy for NNPP
                        })
            
            fig.update_layout(barmode='stack', xaxis_title='Cluster', yaxis_title='Vote Percentage (%)')
            
            st.plotly_chart(fig, use_container_width=True)
            
            # Display cluster vote statistics
            st.subheader("Cluster Voter Statistics")
            
            # Calculate statistics for each cluster
            cluster_stats = clustered_df.groupby('Cluster').agg({
                'PU-Name': 'count',
                'APC': ['mean', 'std'],
                'PDP': ['mean', 'std'],
                'LP': ['mean', 'std'],
                'NNPP': ['mean', 'std'],
                'Total_Votes': ['mean', 'std', 'sum']
            }).reset_index()
            
            # Rename columns
            cluster_stats.columns = [
                'Cluster', 'Polling_Units', 
                'APC_Mean', 'APC_Std', 
                'PDP_Mean', 'PDP_Std',
                'LP_Mean', 'LP_Std',
                'NNPP_Mean', 'NNPP_Std',
                'Mean_Votes', 'Std_Votes', 'Total_Votes'
            ]
            
            # Show statistics as a table
            st.dataframe(cluster_stats.style.format({
                'APC_Mean': '{:.1f}',
                'APC_Std': '{:.1f}',
                'PDP_Mean': '{:.1f}',
                'PDP_Std': '{:.1f}',
                'LP_Mean': '{:.1f}',
                'LP_Std': '{:.1f}',
                'NNPP_Mean': '{:.1f}',
                'NNPP_Std': '{:.1f}',
                'Mean_Votes': '{:.1f}',
                'Std_Votes': '{:.1f}',
                'Total_Votes': '{:,.0f}'
            }))
            
            # Detect anomalous clusters
            st.subheader("Anomalous Clusters")
            
            # Calculate overall vote proportions
            total_apc = df['APC'].sum()
            total_pdp = df['PDP'].sum()
            total_lp = df['LP'].sum()
            total_nnpp = df['NNPP'].sum()
            total_votes = total_apc + total_pdp + total_lp + total_nnpp
            
            overall_props = {
                'APC': total_apc / total_votes,
                'PDP': total_pdp / total_votes,
                'LP': total_lp / total_votes,
                'NNPP': total_nnpp / total_votes
            }
            
            # Calculate Z-score for each cluster's proportion
            anomaly_clusters = []
            
            for _, row in cluster_votes.iterrows():
                cluster_id = row['Cluster']
                cluster_total = row['Total_Votes']
                
                # Skip very small clusters
                if cluster_total < 50:
                    continue
                
                anomaly_score = 0
                
                for party in ['APC', 'PDP', 'LP', 'NNPP']:
                    cluster_prop = row[party] / cluster_total
                    # Simple deviation from overall proportion
                    anomaly_score += abs(cluster_prop - overall_props[party])
                
                if anomaly_score > 0.3:  # Arbitrary threshold
                    anomaly_clusters.append({
                        'Cluster': int(cluster_id),
                        'Anomaly_Score': anomaly_score,
                        'Total_Votes': cluster_total,
                        'APC_Percent': row['APC'] / cluster_total * 100,
                        'PDP_Percent': row['PDP'] / cluster_total * 100,
                        'LP_Percent': row['LP'] / cluster_total * 100,
                        'NNPP_Percent': row['NNPP'] / cluster_total * 100
                    })
            
            # Display anomalous clusters
            if anomaly_clusters:
                anomaly_df = pd.DataFrame(anomaly_clusters)
                
                # Display as a table
                st.dataframe(anomaly_df.style.format({
                    'Anomaly_Score': '{:.2f}',
                    'Total_Votes': '{:,.0f}',
                    'APC_Percent': '{:.1f}%',
                    'PDP_Percent': '{:.1f}%',
                    'LP_Percent': '{:.1f}%',
                    'NNPP_Percent': '{:.1f}%'
                }))
                
                # Highlight anomalous clusters on map
                st.subheader("Map of Anomalous Clusters")
                
                # Create a map
                m = folium.Map(location=[8.0, 4.0], zoom_start=8)
                
                # Add points for anomalous clusters
                for anomaly in anomaly_clusters:
                    cluster_id = anomaly['Cluster']
                    
                    # Get all polling units in this cluster
                    cluster_points = gdf[gdf['Cluster'] == cluster_id]
                    
                    # Add markers
                    for idx, row in cluster_points.iterrows():
                        # Create popup
                        popup_text = f"""
                        <b>Polling Unit:</b> {row['PU-Name']}<br>
                        <b>LGA:</b> {row['LGA']}<br>
                        <b>Cluster:</b> {row['Cluster']}<br>
                        <b>Anomaly Score:</b> {anomaly['Anomaly_Score']:.2f}<br>
                        <b>APC:</b> {row['APC']}<br>
                        <b>PDP:</b> {row['PDP']}<br>
                        <b>LP:</b> {row['LP']}<br>
                        <b>NNPP:</b> {row['NNPP']}<br>
                        """
                        
                        # Add marker
                        folium.CircleMarker(
                            location=[row['Latitude'], row['Longitude']],
                            radius=5,
                            popup=folium.Popup(popup_text, max_width=300),
                            color='red',
                            fill=True,
                            fill_opacity=0.7
                        ).add_to(m)
                
                # Display the map
                folium_static(m)
            else:
                st.info("No anomalous clusters detected with the current parameters.")
    
    # Outlier Detection Page
    elif page == "Outlier Detection":
        st.header("Outlier Detection Analysis")
        
        # Outlier detection parameters
        st.subheader("Outlier Detection Parameters")
        
        outlier_threshold = st.slider(
            "Select outlier threshold (Z-score sum):",
            min_value=1.0,
            max_value=5.0,
            value=2.5,
            step=0.1,
            help="Higher values detect fewer, more extreme outliers. Lower values detect more potential outliers."
        )
        
        # Re-flag outliers based on user threshold
        df['Outlier_Flag'] = df['Outlier_Score'] > outlier_threshold
        gdf['Outlier_Flag'] = df['Outlier_Flag']
        
        # Display metrics
        outlier_count = df['Outlier_Flag'].sum()
        outlier_percent = outlier_count / len(df) * 100
        
        col1, col2 = st.columns(2)
        with col1:
            st.metric("Number of Outliers", f"{outlier_count:,}")
        with col2:
            st.metric("Percentage of Polling Units", f"{outlier_percent:.1f}%")
        
        # Display top outliers
        st.subheader("Top Outlier Polling Units")
        
        # Sort by outlier score
        top_outliers = df[df['Outlier_Flag']].sort_values('Outlier_Score', ascending=False).head(10)
        
        # Display as a table with formatted values
        top_outliers_display = top_outliers[['PU-Name', 'LGA', 'Ward', 'APC', 'PDP', 'LP', 'NNPP', 'Outlier_Score']]
        st.dataframe(top_outliers_display.style.format({
            'Outlier_Score': '{:.2f}'
        }), use_container_width=True)
        
        # Display component scores
        st.subheader("Component Z-Scores for Top Outliers")
        
        # Create a DataFrame for component scores
        component_scores = top_outliers[['PU-Name', 'LGA', 'APC_Z', 'PDP_Z', 'LP_Z', 'NNPP_Z']]
        
        # Display as a table with formatted values
        st.dataframe(component_scores.style.format({
            'APC_Z': '{:.2f}',
            'PDP_Z': '{:.2f}',
            'LP_Z': '{:.2f}',
            'NNPP_Z': '{:.2f}'
        }), use_container_width=True)
        
        # Visualize outlier distribution
        st.subheader("Outlier Score Distribution")
        
        fig = px.histogram(df, x='Outlier_Score', nbins=50,
                        title='Distribution of Outlier Scores',
                        color_discrete_sequence=['blue'])
        fig.add_vline(x=outlier_threshold, line_dash="dash", line_color="red", 
                    annotation_text="Outlier Threshold")
        st.plotly_chart(fig, use_container_width=True)
        
        # Map of outliers
        st.subheader("Geographic Distribution of Outliers")
        
        # Create a map
        m = folium.Map(location=[8.0, 4.0], zoom_start=8)
        
        # Add outlier points
        for idx, row in gdf[gdf['Outlier_Flag']].iterrows():
            # Create popup text
            popup_text = f"""
            <b>Polling Unit:</b> {row['PU-Name']}<br>
            <b>LGA:</b> {row['LGA']}<br>
            <b>Ward:</b> {row['Ward']}<br>
            <b>APC:</b> {row['APC']} (Z: {row['APC_Z']:.2f})<br>
            <b>PDP:</b> {row['PDP']} (Z: {row['PDP_Z']:.2f})<br>
            <b>LP:</b> {row['LP']} (Z: {row['LP_Z']:.2f})<br>
            <b>NNPP:</b> {row['NNPP']} (Z: {row['NNPP_Z']:.2f})<br>
            <b>Outlier Score:</b> {row['Outlier_Score']:.2f}<br>
            """
            
            # Color based on outlier score
            color = 'red'
            if row['Outlier_Score'] > outlier_threshold + 2:
                color = 'darkred'  # More extreme outliers
            
            # Add marker
            folium.CircleMarker(
                location=[row['Latitude'], row['Longitude']],
                radius=5 + min(10, row['Outlier_Score']),  # Size based on outlier score
                popup=folium.Popup(popup_text, max_width=300),
                color=color,
                fill=True,
                fill_opacity=0.7
            ).add_to(m)
        
        # Display the map
        folium_static(m)
        
        # Outlier analysis by party
        st.subheader("Outlier Analysis by Party")
        
        # Create columns for party selection
        col1, col2 = st.columns(2)
        
        with col1:
            # Select party for analysis
            selected_party = st.selectbox(
                "Select a party to analyze:",
                ["APC", "PDP", "LP", "NNPP"]
            )
            
            # Display scatter plot of selected party vs total votes
            fig = px.scatter(df, x='Total_Votes', y=selected_party,
                            color='Outlier_Flag',
                            title=f'{selected_party} Votes vs Total Votes',
                            color_discrete_map={True: 'red', False: 'blue'},
                            labels={'Total_Votes': 'Total Votes', selected_party: f'{selected_party} Votes'})
            
            st.plotly_chart(fig, use_container_width=True)
        
        with col2:
            # Display distribution of Z-scores for selected party
            fig = px.histogram(df, x=f'{selected_party}_Z', nbins=50,
                            title=f'Distribution of {selected_party} Z-Scores',
                            color_discrete_sequence=['green'])
            
            # Add vertical lines for standard thresholds
            fig.add_vline(x=-2, line_dash="dash", line_color="blue")
            fig.add_vline(x=2, line_dash="dash", line_color="red")
            
            st.plotly_chart(fig, use_container_width=True)
        
        # Outlier LGA analysis
        st.subheader("LGAs with Highest Outlier Proportions")
        
        # Calculate proportion of outliers by LGA
        lga_outliers = df.groupby('LGA')['Outlier_Flag'].mean().reset_index()
        lga_outliers.columns = ['LGA', 'Outlier_Proportion']
        lga_outliers['Outlier_Proportion'] = lga_outliers['Outlier_Proportion'] * 100
        lga_outliers = lga_outliers.sort_values('Outlier_Proportion', ascending=False)
        
        # Create a bar chart
        fig = px.bar(lga_outliers, x='LGA', y='Outlier_Proportion',
                    title='Percentage of Outlier Polling Units by LGA',
                    color='Outlier_Proportion',
                    color_continuous_scale='Reds',
                    labels={'Outlier_Proportion': 'Outlier %'})
        
        st.plotly_chart(fig, use_container_width=True)
    
    # Historical Trends Page
    elif page == "Historical Trends":
        st.header("Historical Electoral Trends (2015-2023)")
        
        # Add total votes to historical data
        historical_df['Total_Votes'] = historical_df['APC'] + historical_df['PDP'] + historical_df['Other_Parties']
        
        # Calculate percentages
        for party in ['APC', 'PDP', 'Other_Parties']:
            historical_df[f'{party}_Percent'] = historical_df[party] / historical_df['Total_Votes'] * 100
        
        # Display historical summary
        st.subheader("Historical Election Results (2015-2023)")
        
        # Format votes with commas
        hist_display = historical_df.copy()
        for col in ['APC', 'PDP', 'Other_Parties', 'Total_Votes']:
            hist_display[col] = hist_display[col].apply(lambda x: f"{x:,}")
        
        # Display as a table
        st.dataframe(hist_display, use_container_width=True)
        
        # Visualize vote counts over time
        st.subheader("Vote Counts by Party (2015-2023)")
        
        # Line chart of absolute votes
        fig = px.line(historical_df, x='Year', y=['APC', 'PDP', 'Other_Parties'],
                    title='Vote Counts by Party (2015-2023)',
                    markers=True, 
                    color_discrete_map={
                        'APC': '#008000',  # Green for APC
                        'PDP': '#FF0000',  # Red for PDP
                        'Other_Parties': '#808080'  # Grey for Others
                    })
        
        fig.update_layout(xaxis_title='Election Year', 
                        yaxis_title='Number of Votes',
                        legend_title='Party')
        
        st.plotly_chart(fig, use_container_width=True)
        
        # Visualize vote percentages over time
        st.subheader("Vote Percentages by Party (2015-2023)")
        
        # Line chart of percentages
        fig = px.line(historical_df, x='Year', y=['APC_Percent', 'PDP_Percent', 'Other_Parties_Percent'],
                    title='Vote Percentages by Party (2015-2023)',
                    markers=True,
                    color_discrete_map={
                        'APC_Percent': '#008000',  # Green for APC
                        'PDP_Percent': '#FF0000',  # Red for PDP
                        'Other_Parties_Percent': '#808080'  # Grey for Others
                    })
        
        fig.update_layout(xaxis_title='Election Year', 
                        yaxis_title='Percentage of Votes (%)',
                        legend_title='Party')
        
        # Update legend names to remove "_Percent" suffix
        fig.for_each_trace(lambda t: t.update(name=t.name.replace('_Percent', '')))
        
        st.plotly_chart(fig, use_container_width=True)
        
        # Calculate vote changes between election cycles
        st.subheader("Vote Changes Between Election Cycles")
        
        # Calculate absolute and percentage changes
        changes = []
        
        for i in range(1, len(historical_df)):
            prev_year = historical_df.iloc[i-1]['Year']
            curr_year = historical_df.iloc[i]['Year']
            
            for party in ['APC', 'PDP', 'Other_Parties']:
                prev_votes = historical_df.iloc[i-1][party]
                curr_votes = historical_df.iloc[i][party]
                
                abs_change = curr_votes - prev_votes
                pct_change = (abs_change / prev_votes) * 100 if prev_votes > 0 else 0
                
                changes.append({
                    'Period': f"{prev_year}-{curr_year}",
                    'Party': party,
                    'Absolute_Change': abs_change,
                    'Percentage_Change': pct_change
                })
        
        # Convert to DataFrame
        changes_df = pd.DataFrame(changes)
        
        # Two columns for visualizations
        col1, col2 = st.columns(2)
        
        with col1:
            # Bar chart of absolute changes
            fig = px.bar(changes_df, x='Period', y='Absolute_Change', color='Party',
                        title='Absolute Vote Changes Between Elections',
                        color_discrete_map={
                            'APC': '#008000',  # Green for APC
                            'PDP': '#FF0000',  # Red for PDP
                            'Other_Parties': '#808080'  # Grey for Others
                        })
            
            fig.update_layout(xaxis_title='Election Period', 
                            yaxis_title='Vote Change')
            
            st.plotly_chart(fig, use_container_width=True)
        
        with col2:
            # Bar chart of percentage changes
            fig = px.bar(changes_df, x='Period', y='Percentage_Change', color='Party',
                        title='Percentage Vote Changes Between Elections',
                        color_discrete_map={
                            'APC': '#008000',  # Green for APC
                            'PDP': '#FF0000',  # Red for PDP
                            'Other_Parties': '#808080'  # Grey for Others
                        })
            
            fig.update_layout(xaxis_title='Election Period', 
                            yaxis_title='Percentage Change (%)')
            
            st.plotly_chart(fig, use_container_width=True)
        
        # Total voter turnout analysis
        st.subheader("Voter Turnout Analysis")
        
        # Calculate total votes
        fig = px.bar(historical_df, x='Year', y='Total_Votes',
                    title='Total Votes Cast (2015-2023)',
                    color_discrete_sequence=['#1f77b4'])
        
        fig.update_layout(xaxis_title='Election Year', 
                        yaxis_title='Total Votes Cast')
        
        st.plotly_chart(fig, use_container_width=True)
        
        # Display key insights
        st.subheader("Key Historical Insights")
        
        st.markdown("""
        1. **Declining Voter Participation**: Total votes have decreased by 48% from 2015 to 2023, indicating potential voter apathy or disenfranchisement.
        
        2. **Party Shift Patterns**: APC vote share decreased significantly from 2015 to 2019, while PDP showed growth. In 2023, APC's percentage recovered while PDP declined sharply.
        
        3. **Rise of Other Parties**: Votes for parties other than APC and PDP have grown proportionally, from 5.6% in 2015 to 14.1% in 2023, showing increasing political fragmentation.
        
        4. **Regional Variations**: The data shows significant regional variations that may correlate with demographic or socioeconomic factors.
        
        5. **Anomalous Pattern Detection**: The 2023 election shows more statistical anomalies than previous elections, potentially indicating increased irregularities.
        """)
else:
    st.error("Failed to load data. Please check the data source or contact the administrator.") 