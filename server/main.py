from fastapi import FastAPI
from fastapi.params import Body,Depends
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/login')
def log(stuff=Body(...)):
	print(stuff)
	print("dlsfkmvsdlkfmv")
	return {"sdvadsv":"adadsvasdv"}


@app.post('/register')
def reg(stuff=Body(...)):
	print(stuff)
	return {"advadsv":"advasdvas"}



if __name__ == "__main__":
	uvicorn.run("main:app",host="0.0.0.0", port=9000, reload=True)
