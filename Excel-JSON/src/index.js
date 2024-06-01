var XSLX =require("xlsx");

const ExcelAJSON=() =>{
    const excel =XSLX.readFile(
        "D:\\Trabajo\\Angular\\Excel-a-JSON\\datos.xlsx"
        );
    
    var nombrehoja=excel.SheetNames;

    let datos = XSLX.utils.sheet_to_json(excel.Sheets[nombrehoja[0]]);
        //{cellDates: true});
    //console.log(datos);
    const jDatos = [];
    for (let i = 0; i<datos.length; i++) {
        const dato =datos[i];
        jDatos.push({
            ...dato,
            Fecha: new Date((dato.Fecha - (25567 + 2)) * 86400 * 1000)
        });
    }
    console.log(jDatos);
};

ExcelAJSON();