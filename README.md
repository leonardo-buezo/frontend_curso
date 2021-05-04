…or create a new repository on the command line

echo "# frontend_curso" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:leonardo-buezo/frontend_curso.git
git push -u origin main