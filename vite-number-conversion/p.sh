# npx tiny 暂时只能手动压缩
npm run build
cd ..
git add .
git commit -m $1
git push origin master
cd ./vite-number-conversion
