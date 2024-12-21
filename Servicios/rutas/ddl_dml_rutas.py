from flask import Blueprint, jsonify, request
from controladores.controlador_ddl_dml import obtener_ddl_dml, ejecutar_ddl_dml

ddl_dml_bp = Blueprint('ddl_dml', __name__)

@ddl_dml_bp.route('/ddl_dml', methods=['GET'])
def get_ddl_dml():
    data = obtener_ddl_dml()
    return jsonify(data)

@ddl_dml_bp.route('/ddl_dml', methods=['POST'])
def post_ddl_dml():
    query = request.get_json()
    result = ejecutar_ddl_dml(query)
    return jsonify(result), 200
