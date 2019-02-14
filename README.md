
# Project Baseball
![Main](main.png)
### The Story:
Data analytics within baseball is one of the fastest growing aspects of professional sports. All components of the game are now thoroughly analyzed by analyst and various metrics. In our group project, we selected some popular aspects of the game in hopes of examining presumed trends surrounding them. 

### Data Source 
[Data Source](https://github.com/jldbc/pybaseball): in this project as a data source we used python api pulls recorded statistics from FanGraphs and Baseball Savant.

### Follow along!
1) Run Create_DB_and_Tables.sql in MySQL Workbench.
2) Change mysql password data-clean-import-sql.ipynb  
3) Run data-clean-import-sql.ipynb in jupyter notebook.

To run Flask: 
1) Open Terminal and change you directory to "Flask" folder.
2) Change mysql password in app.py
Note: each route has its own DB connection, password needs to be updated for all of them
3) Run chmod +x run.sh  
4) Run ./run.sh  
5) Open http://localhost:5000/  



