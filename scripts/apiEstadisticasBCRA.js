global.fetch = require("node-fetch");

const API_URL='https://api.estadisticasbcra.com'
const PEOPLE_URL='/dif_inflacion_esperada_vs_interanual'
const TOKEN='eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTE1MzA1OTQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJsZW9idWV6b0BnbWFpbC5jb20ifQ.rFcgNFzBH_mAnty2r851b76nGtlUsvwdnY3tNG20VuUGsPZzhaywMNSbkWAstSisdP71DBYrHAL6DG1MX04cUg'
const myHeader = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Authorization': 'BEARER ' + TOKEN
    };
const options = {
    method: 'GET',
    headers: myHeader
};
const url = `${API_URL}${PEOPLE_URL}`

// Usando estadisticasbcra.com
var obtenerCotizacionUSD = () => {
    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log('Diferencia entre inflación interanual oficial y esperada:')
            for(let i=135;i<150;i++) {
                console.log(`${data[i].d}  -  %${data[i].v}`)
            }
            //console.log(`${data[0].e}`)
            //console.log(`${data[0].t}`)
        }).catch((error) => {
            console.log(error)
        });
}

obtenerCotizacionUSD()
