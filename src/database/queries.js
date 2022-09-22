export const queries = {
  getAllProps: "Select * from tblPropietario",
  getProp: "SELECT * FROM tblPropietario WHERE propCod=@cod",
  createProp:
    "INSERT INTO tblPropietario VALUES (propCod=@cod,propNombre=@nombre,propApellido=@apellido,propEmail=@email,propTelefono=@telefono,propTipoDocumento=@tipoDoc,propDocumento=@documento,propFechaNac=@fechaNac,propEdad=@edad)",
  delProp: "DELETE FROM tblPropietario WHERE propCod=@cod",
  updateProp:
    "UPDATE tblPropietario SET propTelefono=@telefono,propNombre=@nombre,propApellido=@apellido,propEmail=@email,propTipoDocumento=@tipoDoc,propFechaNac=@fechaNac,propEdad=@edad WHERE propCod=@cod",
  countProps: "SELECT COUNT(*) FROM tblPropietario",
};
