import json

def leer_json(ruta):
    with open(ruta, 'r') as f:
        return json.load(f)

def escribir_json(ruta, data):
    with open(ruta, 'w') as f:
        json.dump(data, f, indent=4)
