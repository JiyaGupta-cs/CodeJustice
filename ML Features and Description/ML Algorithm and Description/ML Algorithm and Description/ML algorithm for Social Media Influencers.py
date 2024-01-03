from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd

# Sample dataset (content/posts data)
data = {
    'Post_ID': [1, 2, 3, 4],
    'Content': [
        'Join the #DrugFreeTalents challenge and showcase your skills!',
        'New research findings about the impact of drugs on mental health.',
        'Stay positive and drug-free. Your future self will thank you!',
        'Teen workshop on mental health and resilience against peer pressure.'
    ],
    'Engagement': [500, 300, 800, 600]
}

# Create a DataFrame
df = pd.DataFrame(data)

# TF-IDF Vectorization
tfidf_vectorizer = TfidfVectorizer()
tfidf_matrix = tfidf_vectorizer.fit_transform(df['Content'])

# Calculate cosine similarity
cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)

# Sample function to recommend content based on user preferences
def recommend_content(post_id, num_recommendations=3):
    post_index = df[df['Post_ID'] == post_id].index[0]
    sim_scores = list(enumerate(cosine_sim[post_index]))
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
    sim_scores = sim_scores[1:num_recommendations+1]
    recommended_posts = [i[0] for i in sim_scores]
    return df.iloc[recommended_posts]

# Example usage: Recommend content similar to Post_ID 1
recommended_content = recommend_content(1)
print(recommended_content)
