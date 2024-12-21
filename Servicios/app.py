from flask import Flask
from rutas.diccionario_rutas import diccionario_bp
from rutas.ddl_dml_rutas import ddl_dml_bp

app = Flask(__name__)

# Registrar las rutas
app.register_blueprint(diccionario_bp)
app.register_blueprint(ddl_dml_bp)

if __name__ == '__main__':
    app.run(debug=True)
