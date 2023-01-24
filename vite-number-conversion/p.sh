npm run build
cd ..
npx tiny
git add .
git commit -m $1
git push origin master
cd ./vite-number-conversion
