import uuid 



def generate_code():
    code_mod = str(uuid.uuid4()).replace('-', '')[:12]
    return code_mod