# npx tiny 暂时只能手动压缩

python ../articles/save_file_names.py

npm run build
cd ..
git add .
git commit -m $1
git push origin master
cd ./vite-number-conversion
