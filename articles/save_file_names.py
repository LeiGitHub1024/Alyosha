import os
import json

# 定义要搜索的目录
directory = '../articles'

# 定义要输出 JSON 文件的路径
output_file = '../vite-number-conversion/src/pages/article/article_list.json'

# 创建一个空数组来存储每个年份的文章列表
articles_by_year = []

# 遍历目录及其子目录，将每个子目录下的 .md 文件名存储到相应的年份列表中
for year_dir in os.scandir(directory):
    if year_dir.is_dir():
        year = int(year_dir.name)
        year_articles = []
        for article_file in os.scandir(year_dir.path):
            if article_file.name.endswith('.md'):
                year_articles.append(os.path.splitext(article_file.name)[0])
        articles_by_year.append({'year': year, 'articles': year_articles})

articles_by_year = articles_by_year[::-1]
# 将结果存储为 JSON 文件
with open(output_file, 'w') as f:
    json.dump(articles_by_year, f)








