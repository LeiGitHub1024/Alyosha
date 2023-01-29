npm run build
cd ..
# npx tiny 暂时只能手动压缩
git add .
git commit -m $1
git push origin master
cd ./vite-number-conversion
