import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import GridSearchCV
from sklearn.metrics import confusion_matrix
from sklearn.metrics import accuracy_score
from sklearn.impute import SimpleImputer
from sklearn.pipeline import Pipeline
import pickle
df=pd.read_csv("heart.csv")
# print(df.columns)
# print(df.head)
X=df.drop('target',axis=1)
y=df['target']
steps = [('imputation', SimpleImputer(missing_values=np.nan, strategy='most_frequent',verbose=0)),
        ('DTC()', DecisionTreeClassifier(random_state=42))]
X_train,X_test,y_train,y_test=train_test_split(X,y,train_size=0.7,random_state=42)
pipeline = Pipeline(steps)
pipeline.fit(X_train,y_train)
pickle.dump(pipeline, open('model.pkl','wb'))

"""def evaluate_model(dt_classifier):
    print("Train Accuracy :", accuracy_score(y_train, dt_classifier.predict(X_train)))
    print("Train Confusion Matrix:")
    print(confusion_matrix(y_train, dt_classifier.predict(X_train)))
    print("-"*50)
    print("Test Accuracy :", accuracy_score(y_test, dt_classifier.predict(X_test)))
    print("Test Confusion Matrix:")
    print(confusion_matrix(y_test, dt_classifier.predict(X_test)))
"""
# evaluate_model(dt_default)
# model = pickle.load(open('model.pkl','rb'))
y_pred=pipeline.predict([[58,1,2,140,211,1,0,165,0,0,2,0,2]])
# print(y_pred)