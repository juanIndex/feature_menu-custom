const menu = {
    "menu": [
        {
            "id": 1,
            "id_padre": 1,
            "link": "/nuevo_DisplayType_G",
            "titulo": "NEW IN",

        }, {
            "id": 2,
            "id_padre": 2,
            "link": "/listado/ropa-accesorios/calzado/#applied_filter_id%3Dcategory%26applied_filter_name%3DCategor%C3%ADas%26applied_filter_order%3D3%26applied_value_id%3DMLA109026%26applied_value_name%3DCalzado%26applied_value_order%3D1%26applied_value_results%3D290%26is_custom%3Dfalse_DisplayType_G",
            "titulo": "COLECCIÓN",
            "menu": [
                {
                    "id": 10,
                    "id_padre": 2,
                    "link": "/listado/ropa-accesorios/calzado/sandalias-ojotas/_DisplayType_G",
                    "titulo": "Sandalias"
                },
                {
                    "id": 10,
                    "id_padre": 2,
                    "link": "/plataformas_DisplayType_G",
                    "titulo": "Plataformas"
                },
                {
                    "id": 10,
                    "id_padre": 2,
                    "link": "/listado/ropa-accesorios/calzado/zapatillas/_DisplayType_G",
                    "titulo": "Sneakers"
                },
                {
                    "id": 10,
                    "id_padre": 2,
                    "link": "/listado/ropa-accesorios/calzado/_FOOTWEAR*STYLE_1164210#applied_filter_id%3DFOOTWEAR_STYLE%26applied_filter_name%3DEstilo%26applied_filter_order%3D12%26applied_value_id%3D1164210%26applied_value_name%3DTexanas%26applied_value_order%3D13%26applied_value_results%3D6%26is_custom%3Dfalse_DisplayType_G",
                    "titulo": "Texanas"
                },
                {
                    "id": 10,
                    "id_padre": 2,
                    "link": "/listado/ropa-accesorios/calzado/_FOOTWEAR*STYLE_1164208#applied_filter_id%3DFOOTWEAR_STYLE%26applied_filter_name%3DEstilo%26applied_filter_order%3D12%26applied_value_id%3D1164208%26applied_value_name%3DBotas+de+lluvia%26applied_value_order%3D2%26applied_value_results%3D6%26is_custom%3Dfalse_DisplayType_G",
                    "titulo": "Botas de lluvia"
                },
                {
                    "id": 10,
                    "id_padre": 2,
                    "link": "/ni%C3%B1as_DisplayType_G",
                    "titulo": "Niñas"
                }
            ]
        }, {
            "id": 3,
            "id_padre": 3,
            "link": "/listado/ropa-accesorios/equipaje-bolsos-carteras/#applied_filter_id%3Dcategory%26applied_filter_name%3DCategor%C3%ADas%26applied_filter_order%3D3%26applied_value_id%3DMLA110761%26applied_value_name%3DEquipaje%2C+Bolsos+y+Carteras%26applied_value_order%3D2%26applied_value_results%3D23%26is_custom%3Dfalse_DisplayType_G",
            "titulo": "ACCESORIOS",
            "menu": [
                {
                    "id_padre": 3,
                    "link": "/listado/ropa-accesorios/equipaje-bolsos-carteras/billeteras-monederos/billeteras/_DisplayType_G",
                    "titulo": "Billeteras"
                },
                {
                    "id_padre": 3,
                    "link": "/bandoleras_DisplayType_G",
                    "titulo": "Bandoleras"
                },
                {
                    "id_padre": 3,
                    "link": "/listado/ropa-accesorios/equipaje-bolsos-carteras/carteras/_DisplayType_G",
                    "titulo": "Carteras"
                },
                {
                    "id_padre": 3,
                    "link": "/listado/ropa-accesorios/equipaje-bolsos-carteras/rinoneras/_DisplayType_G",
                    "titulo": "Riñoneras"
                },
                {
                    "id_padre": 3,
                    "link": "/listado/ropa-accesorios/ropa-interior-dormir/ropa-interior/medias-panties/medias/_DisplayType_G",
                    "titulo": "Medias"
                },
                {
                    "id_padre": 3,
                    "link": "/mochilas_DisplayType_G",
                    "titulo": "Mochilas"
                }
            ]
        }, {
            "id": 4,
            "id_padre": 4,
            "link": "/_Discount_5-100_DisplayType_G",
            "titulo": "SALE"
        }
    ]
};
/*------------------------------------------------------------------------------MENU------*/
html = niveles(menu.menu);
document.getElementById("indexNavBar").innerHTML = html;
document.getElementById("menuCustomFooter").innerHTML = html;
document.getElementById("sidebar-menu-list").innerHTML = html;
function niveles(menu, l) {
    const newUrl = '';
    if (l == undefined)
        l = 0;
    var sp = " ".repeat(l * 2);
    html = sp + "<ul class='menuCat flexIndex'>\n"
    for (n in menu) {
        html += sp + " <li class='data-idP" + menu[n].id + "'><span><a href=" + newUrl + menu[n].link + ">" + menu[n].titulo;
        if (menu[n].menu) {
            html += "\n" + niveles(menu[n].menu, l + 1, html) + sp + " ";
        };
        html += "</a></span></li>\n";
    }
    html += sp + "</ul>\n"
    return html;
}
/*--------------------------------------------------------------------------- */
function menuMobile() {
    let items = document.querySelectorAll('#sidebar-menu-list ul li')

    items.forEach(item => {
        item.addEventListener('click', function () {
            if (item.classList.contains('li-active')) {
                item.classList.remove('li-active')
            } else {
                item.classList.add('li-active')
            }
        })
    })
}
setTimeout(menuMobile, 1000)