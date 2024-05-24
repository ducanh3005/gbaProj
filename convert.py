import pandas as pd
import json

# Load the Excel file
file_path = './gba.xlsx'
excel_data = pd.read_excel(file_path)

# Rename columns according to the products.json structure
excel_data = excel_data.rename(columns={
    'code': 'id',
    'Downloaded': 'Downloaded',
    'Description': 'Description',
    'Image': 'image',
    'Categories': 'categories',
    'Name': 'name' ,
    'DownloadLink': 'downloadLink',
    'isPopular': 'isPopular'
})

# Convert categories from string to list
excel_data['categories'] = excel_data['categories'].apply(lambda x: x.split(',') if isinstance(x, str) else [])

# Convert isPopular from any value to boolean
# Convert the dataframe to a list of dictionaries
products_json = excel_data.to_dict(orient='records')

# Convert the list of dictionaries to a JSON formatted string
products_json_str = json.dumps(products_json, indent=2)

# Save the JSON data to a file
json_file_path = 'products.json'
with open(json_file_path, 'w') as json_file:
    json_file.write(products_json_str)

print("Conversion completed. JSON file saved as 'products.json'.")
