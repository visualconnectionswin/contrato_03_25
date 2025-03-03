/***************************************
 * CONSTANTES DE SVA
 ***************************************/
moment.locale("es");
const currentDate = moment();
const salto_linea = `<hr><hr><hr><hr><hr><hr></hr><hr><hr><hr><hr><hr><hr></hr><hr><hr><hr><hr><hr><hr></hr>`;

const svaConstants = {
  fono: {
    fono_10: {
      label: "FONO",
      description: "Servicio fono a S/10"
    },
    fono_prov_hb: {
      label: "FONO S/1 (Provincia Plan HB 1000)",
      description: "Servicio fono para provincia con PLAN HB 1000"
    }
  },
  mesh: {
    mesh_400: {
      label: "1 MESH PLAN 400/350 GAMER",
      description: `<br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a:<br> <br><strong class="bold-keyword">Un (01) equipo no terminal Mesh en comodato.</strong><br> <br> La instalación alámbrica tiene un costo adicional de <strong class="bold-keyword">S/ 55.00</strong> incluido IGV por equipo. ¿Deseas la instalación alámbrica? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong><br> <br> La entrega se realizará en el domicilio del servicio de internet, el titular deberá exhibir el DNI/CE en físico, para validar su identidad, y suscribir el Acta de Entrega. Para mayor información de términos y condiciones ingresa a win.pe <br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    mesh_600: {
      label: "2 MESH PLAN 600/600 GAMER",
      description: `<br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a:<br> <br><strong class="bold-keyword">DOS (02) equipos no terminal Mesh en comodato.</strong><br> <br> La instalación alámbrica tiene un costo adicional de <strong class="bold-keyword">S/ 55.00</strong> incluido IGV por equipo. ¿Deseas la instalación alámbrica? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong><br> <br> La entrega se realizará en el domicilio del servicio de internet, el titular deberá exhibir el DNI/CE en físico, para validar su identidad, y suscribir el Acta de Entrega. Para mayor información de términos y condiciones ingresa a win.pe <br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    mesh_1000: {
      label: "2 MESH Plan de 1000",
      description: `<br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a:<br> <br><strong class="bold-keyword">DOS (02) equipos no terminal Mesh en comodato.</strong><br> <br> La instalación alámbrica tiene un costo adicional de <strong class="bold-keyword">S/ 55.00</strong> incluido IGV por equipo. <strong class="bold-keyword">Por promoción, tendrá un precio de S/ 0.00 (cero soles).</strong> <br><br> ¿Deseas la instalación alámbrica? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong><br> <br> La entrega se realizará en el domicilio del servicio de internet, el titular deberá exhibir el DNI/CE en físico, para validar su identidad, y suscribir el Acta de Entrega. Para mayor información de términos y condiciones ingresa a win.pe <br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    mesh_comodato_1: {
      label: "1 MESH en Comodato (HB LIMA)",
      description: `<br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a:<br> <br><strong class="bold-keyword">Un (01) equipo no terminal Mesh en comodato.</strong><br> <br> La entrega se realizará en el domicilio del servicio de internet, el titular deberá exhibir el DNI/CE en físico, para validar su identidad, y suscribir el Acta de Entrega. Para mayor información de términos y condiciones ingresa a win.pe <br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    mesh_comodato_2: {
      label: "2 MESH en Comodato (HB LIMA)",
      description: `<br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a:<br> <br><strong class="bold-keyword">Un (02) equipos no terminal Mesh en comodato.</strong><br> <br> La entrega se realizará en el domicilio del servicio de internet, el titular deberá exhibir el DNI/CE en físico, para validar su identidad, y suscribir el Acta de Entrega. Para mayor información de términos y condiciones ingresa a win.pe <br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    mesh_alquiler_15: {
      label: "1 MESH Alquiler S/15",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, decides alquilar:<br> <br><strong class="bold-keyword">Un (01) equipo no terminal Mesh.</strong><br> <br> El cargo de alquiler mensual es de <strong class="bold-keyword">S/ 15.00</strong> incluido IGV, el cual será incluido en el recibo de internet fijo. En el primer recibo pagarás un prorrateo desde la fecha de entrega.<br> <br> Para mayor información de términos y condiciones ingresa a win.pe El cese del alquiler se ejecutará a los cinco días de solicitado. En caso se produzca la baja del servicio de internet, el acuerdo quedará sin efecto. La entrega se realizará en el domicilio del servicio de internet, el titular deberá exhibir el DNI/CE en físico para validar su identidad, y suscribir el Acta de Entrega.<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    mesh_alquiler_20: {
      label: "2 MESH Alquiler S/20",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, decides alquilar:<br> <br><strong class="bold-keyword">Dos (02) equipos no terminal Mesh.</strong><br> <br> El cargo de alquiler mensual es de <strong class="bold-keyword">S/ 20.00</strong> incluido IGV, el cual será incluido en el recibo de internet fijo. En el primer recibo pagarás un prorrateo desde la fecha de entrega.<br> <br> Para mayor información de términos y condiciones ingresa a win.pe El cese del alquiler se ejecutará a los cinco días de solicitado. En caso se produzca la baja del servicio de internet, el acuerdo quedará sin efecto. La entrega se realizará en el domicilio del servicio de internet, el titular deberá exhibir el DNI/CE en físico para validar su identidad, y suscribir el Acta de Entrega.<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    }
  },
  winbox: {
    winbox_15: {
      label: "1 WINBOX S/15",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, decides alquilar:<br> <br><strong class="bold-keyword">Un (01) equipo WINBOX con sus accesorios.</strong><br> <br> El cargo de alquiler mensual es de <strong class="bold-keyword">S/ 15.00</strong> incluido IGV.<br> <br> Para mayor información de términos y condiciones ingresa a win.pe El cese del alquiler se ejecutará a los cinco días de solicitado. En caso se produzca la baja del servicio de internet, el acuerdo quedará sin efecto. La entrega se realizará en el domicilio del servicio de internet, el titular deberá exhibir el DNI/CE en físico para validar su identidad, y suscribir el Acta de Entrega.<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    winbox_30: {
      label: "2 WINBOX S/30",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, decides alquilar:<br> <br><strong class="bold-keyword">Dos (02) equipos WINBOX con sus accesorios.</strong><br> <br> El cargo de alquiler mensual es de <strong class="bold-keyword">S/ 30.00</strong> incluido IGV.<br> <br> Para mayor información de términos y condiciones ingresa a win.pe El cese del alquiler se ejecutará a los cinco días de solicitado. En caso se produzca la baja del servicio de internet, el acuerdo quedará sin efecto. La entrega se realizará en el domicilio del servicio de internet, el titular deberá exhibir el DNI/CE en físico para validar su identidad, y suscribir el Acta de Entrega.<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    winbox_plan_hb_1: {
      label: "1 WINBOX Plan HB",
      description: `<br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a:<br> <br><strong class="bold-keyword">Un (01) equipo WINBOX con sus accesorios, en comodato.</strong><br> <br> La entrega se realizará en el domicilio del servicio de internet, el titular deberá exhibir el DNI/CE en físico, para validar su identidad, y suscribir el Acta de Entrega. Para mayor información de términos y condiciones ingresa a win.pe <br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    winbox_plan_hb_2: {
      label: "2 WINBOX Plan HB",
      description: `<br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a:<br> <br><strong class="bold-keyword">Dos (02) equipos WINBOX con sus accesorios, en comodato.</strong><br> <br> La entrega se realizará en el domicilio del servicio de internet, el titular deberá exhibir el DNI/CE en físico, para validar su identidad, y suscribir el Acta de Entrega. Para mayor información de términos y condiciones ingresa a win.pe <br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    }
  },
  wintv: {
    wintv_basico: {
      label: "WINTV BÁSICO",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a: <br> <br><strong class="bold-keyword">Una suscripción para el aplicativo WIN TV</strong><br> <br> El precio mensual de la suscripción es de <strong class="bold-keyword">S/ 15.00</strong> incluido IGV.<br> <br> Para mayor información de términos y condiciones ingresa a win.pe<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    wintv_plus: {
      label: "WINTV PLUS",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a: <br> <br><strong class="bold-keyword">Una suscripción para el aplicativo WIN TV PLUS</strong><br> <br> El precio mensual de la suscripción es de <strong class="bold-keyword">S/ 25.00</strong> incluido IGV.<br> <br> Para mayor información de términos y condiciones ingresa a win.pe<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    wintv_premium: {
      label: "WINTV PREMIUM",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br><strong style="font-weight: bold; color: black;">Con dirección en:</strong><br> <br> De esta manera, por medio del presente, el cliente acepta adquirir de manera adicional a su servicio de internet fijo: <br> <br>Una suscripción al servicio <strong class="bold-keyword">WINTV PREMIUM</strong> , el cual le permitirá acceder a diverso contenido audiovisual a través del aplicativo WIN TV, de acuerdo con las características del plan adquirido, siempre que el cliente mantenga activo su servicio de internet fijo contratado con WIN. <br> <br> El precio mensual de la suscripción es de <strong class="bold-keyword">S/ 49.00</strong> incluido IGV.<br> <br> Para mayor información de términos y condiciones de uso del servicio, así como dispositivos compatibles, ingresa a https://win.pe/wintv<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    wintv_plus_hb: {
      label: "WINTV PLUS (HB)",
      description: "wintv plus (HB)"
    },
    wintv_plus_provincia: {
      label: "WINTV PLUS PROVINCIA",
      description: "wintv plus provincia"
    },
    wintv_plus_promo_efe: {
      label: "WINTV PLUS (PROMO EFE)",
      description: "wintv plus (PROMO EFE)"
    },
    hb_wintv_l1_max_350: {
      label: "350HB - WINTV L1 MAX",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a: <br> <br><strong class="bold-keyword">Una suscripción para el servicio de streaming WINTV L1MAX.</strong><br> <br> El precio mensual de la suscripción es de <strong class="bold-keyword">S/ 10.90</strong> incluido IGV.<br> <br> Para mayor información de términos y condiciones ingresa a win.pe<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    hb_wintv_l1_max_550_wg: {
      label: "550HB - WINTV L1MAX PREMIUM",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a: <br> <br><strong class="bold-keyword">Una suscripción para el servicio de streaming WINTV L1MAX PREMIUM.</strong><br> <br> El precio mensual de la suscripción es de <strong class="bold-keyword">S/ 30.90</strong> incluido IGV.<br> <br> Para mayor información de términos y condiciones ingresa a win.pe<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    hb_wintv_l1_max_750_wg: {
      label: "750HB - WINTV L1MAX PREMIUM",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a: <br> <br><strong class="bold-keyword">Una suscripción para el servicio de streaming WINTV L1MAX PREMIUM.</strong><br> <br> El precio mensual de la suscripción es de <strong class="bold-keyword">S/ 40.00</strong> incluido IGV.<br> <br> Para mayor información de términos y condiciones ingresa a win.pe<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    hb_wintv_l1_max_1000_wg: {
      label: "1000HB - WINTV L1MAX PREMIUM",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a: <br> <br><strong class="bold-keyword">Una suscripción para el servicio de streaming WINTV L1MAX PREMIUM.</strong><br> <br> El precio mensual de la suscripción es de <strong class="bold-keyword">S/ 50.00</strong> incluido IGV.<br> <br> Para mayor información de términos y condiciones ingresa a win.pe<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    hb_wintv_l1_max_1000_prov: {
      label: "1000HBPROVINCIA - WINTV L1MAX PREMIUM",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a: <br> <br><strong class="bold-keyword">Una suscripción para el servicio de streaming WINTV L1MAX PREMIUM.</strong><br> <br> El precio mensual de la suscripción es de <strong class="bold-keyword">S/ 20.90</strong> incluido IGV.<br> <br> Para mayor información de términos y condiciones ingresa a win.pe<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    hb_wintv_l1_max_350: {
      label: "350HB - WINTV L1 MAX",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a: <br> <br><strong class="bold-keyword">Una suscripción para el servicio de streaming WINTV L1MAX.</strong><br> <br> El precio mensual de la suscripción es de <strong class="bold-keyword">S/ 10.90</strong> incluido IGV.<br> <br> Para mayor información de términos y condiciones ingresa a win.pe<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    wintv_l1_max: {
      label: "WINTV L1 MAX",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong> <br> <strong style="font-weight: bold; color: black;">Con dirección en: </strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a: <br> <br><strong class="bold-keyword">Una suscripción al servicio “WINTV L1 MAX”, el cual le permitirá acceder a diverso contenido audiovisual a través del aplicativo WIN TV, de acuerdo con las características del plan adquirido, siempre que el cliente mantenga activo su servicio de internet fijo contratado con WIN.</strong><br> <br> El precio mensual de la suscripción es de <strong class="bold-keyword">S/ 59</strong> incluido IGV.<br> <br> Para mayor información de términos y condiciones de uso del servicio, así como dispositivos compatibles, ingresa a https://win.pe/wintv<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    wintv_l1_max_premium_promo: {
      label: "WIN TV L1 MAX PREMIUM (PROMO CROSS)",
      description: "Wintv l1 max premium (Promo CROSS)"
    },
    wintv_plus_playas: {
      label: "WINTV PLUS (PROMO PLAYAS)",
      description: "WIN TV PLUS (PROMO PLAYAS)"
    }
  },
  winGames: {
    win_games_hb: {
      label: "WINGAMES (HB LIMA)",
      description: `<br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a:<br> <br><strong class="bold-keyword">Una suscripción para el aplicativo WIN GAMES</strong> <br> <br> El precio mensual de la suscripción es de <strong class="bold-keyword">S/  0.90 </strong> incluido IGV. <br><br> Para mayor información de términos y condiciones ingresa a win.pe/TYC <br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    win_games: {
      label: "WINGAMES",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a: <br> <br><strong class="bold-keyword">Una suscripción para el aplicativo WIN GAMES</strong><br> <br> El precio mensual de la suscripción es de <strong class="bold-keyword">S/ 39.00</strong> incluido IGV.<br> <br> Por promoción, tendrá un precio de <strong class="bold-keyword">S/ 29.00 (veintinueve soles) incluido IGV, por los tres (03) primeros meses</strong>; a partir del cuarto mes, pagarás el precio regular.<br><br> Para mayor información de términos y condiciones ingresa a win.pe<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    }
  },
  dgo: {
    dgo_basico: {
      label: "DGO BÁSICO",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a: <br> <br><strong class="bold-keyword">Una suscripción para el aplicativo DGO en su paquete BÁSICO</strong><br> <br> El precio mensual de la suscripción es de <strong class="bold-keyword">S/ 54.00</strong> incluido IGV.<br> <br> Para mayor información de términos y condiciones ingresa a win.pe<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    dgo_full: {
      label: "DGO FULL",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a: <br> <br><strong class="bold-keyword">Una suscripción para el aplicativo DGO en su paquete FULL</strong><br> <br> El precio mensual de la suscripción es de <strong class="bold-keyword">S/ 76.00</strong> incluido IGV.<br> <br> Para mayor información de términos y condiciones ingresa a win.pe<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    dgo_l1_max: {
      label: "DGO 1L1 MAX",
      description: `<br> Hoy ${currentDate.format("DD")} de ${currentDate.format("MMMM")} del ${currentDate.format("YYYY")}, en la ciudad de LIMA, usted contrata con WIN, para ello me brinda los siguientes datos:<br><br> <strong style="font-weight: bold; color: black;">Su nombre completo es</strong> <br> <strong style="font-weight: bold; color: black;">Su número de Documento de Identidad / CE / RUC (10…)</strong><br> <br> De manera adicional e independiente al servicio de internet fijo, mientras mantengas vigente el servicio, accedes a: <br> <br><strong class="bold-keyword">Una suscripción para el aplicativo DGO en su paquete DGO L1 MAX </strong><br> <br> El precio mensual de la suscripción es de <strong class="bold-keyword">S/ 54.00</strong> incluido IGV.<br> <br> Para mayor información de términos y condiciones ingresa a win.pe<br> <br> ¿Aceptas los términos del presente acuerdo? <strong class="bold-keyword">(CLIENTE RESPONDE)</strong>.<br> <br> ${salto_linea}`
    },
    dgo_l1_max_hb: {
      label: "DGO L1 MAX (PLANES HB)",
      description: "DGO L1 MAX (PLANES HB)"
    },
    dgo_l1_max_promo_efe: {
      label: "DGO L1 MAX (PROMO EFE)",
      description: "DGO L1 MAX (PROMO EFE)"
    },
    dgo_full_l1_max: {
      label: "DGO FULL + L1 MAX",
      description: "DGO FULL + L1 MAX"
    },
    dgo_full_l1_max_hb: {
      label: "DGO FULL + L1 MAX (HB VERISURE)",
      description: "DGO FULL + L1 MAX (HB VERISURE)"
    },
    dgo_full_l1_max_promo: {
      label: "DGO FULL + L1 MAX (PROMO EFE)",
      description: "DGO FULL + L1 MAX (PROMO EFE)"
    }
  }
};

/***************************************
 * CONFIGURACIÓN DE VALORES (ejemplo de pricing)
 ***************************************/
const config = {
  pricing: {
    lima: {
      200: { vb: 200, vm: 140, pb: 99,  vbp: 400, vmp: 280 },
      300: { vb: 300, vm: 210, pb: 119, vbp: 600, vmp: 420, pp: 89 },
      350: { vb: 350, vm: 245, pb: 129 },
      360: { vb: 350, vm: 245, pb: 129, pp: 99 },
      400: { vb: 400, vm: 280, pb: 129, vbp: 800, vmp: 560, pp: 99 },
      550: { vb: 550, vm: 385, pb: 139, pp: 109 },
      600: { vb: 600, vm: 420, pb: 139, pp: 109 },
      610: { vb: 600, vm: 420, pb: 159, pp: 129 },
      750: { vb: 750, vm: 525, pb: 149, pp: 119 },
      800: { vb: 800, vm: 560, pb: 199 },
      850: { vb: 850, vm: 595, pb: 99, pp: 69 },
      1000: { vb: 1000, vm: 700, pb: 159, pp: 129 },
      1010: { vb: 1000, vm: 700, pb: 189, pp: 159 }
    },
    provincia: {
      350:  { vb: 350, vm: 245, pb: 69,  vbp: 700, vmp: 490 },
      360: { vb: 350, vm: 245, pb: 129, pp: 99 },
      550:  { vb: 550, vm: 385, pb: 89,  vbp: 800, vmp: 700 },
      610: { vb: 600, vm: 420, pb: 159, pp: 129 },
      850: { vb: 850, vm: 595, pb: 99, pp: 69 },
      1000: { vb: 1000, vm: 700, pb: 109, pp: 79 },
      1010: { vb: 1000, vm: 700, pb: 189, pp: 159 }
    }
  }
};

// CSV de Ubigeo (ejemplo)
const ubigeoCSV = `Ubigeo,Distrito,Provincia,Departamento
010101,Chachapoyas,Chachapoyas,Amazonas
010102,Asuncion,Chachapoyas,Amazonas
010103,Balsas,Chachapoyas,Amazonas
010104,Cheto,Chachapoyas,Amazonas
010105,Chiliquin,Chachapoyas,Amazonas
010106,Chuquibamba,Chachapoyas,Amazonas
010107,Granada,Chachapoyas,Amazonas
010108,Huancas,Chachapoyas,Amazonas
010109,La Jalca,Chachapoyas,Amazonas
010110,Leimebamba,Chachapoyas,Amazonas
010111,Levanto,Chachapoyas,Amazonas
010112,Magdalena,Chachapoyas,Amazonas
010113,Mariscal Castilla,Chachapoyas,Amazonas
010114,Molinopampa,Chachapoyas,Amazonas
010115,Montevideo,Chachapoyas,Amazonas
010116,Olleros,Chachapoyas,Amazonas
010117,Quinjalca,Chachapoyas,Amazonas
010118,San Francisco de Daguas,Chachapoyas,Amazonas
010119,San Isidro de Maino,Chachapoyas,Amazonas
010120,Soloco,Chachapoyas,Amazonas
010121,Sonche,Chachapoyas,Amazonas
010201,La Peca,Bagua,Amazonas
010202,Aramango,Bagua,Amazonas
010203,Copallin,Bagua,Amazonas
010204,El Parco,Bagua,Amazonas
010205,Bagua,Bagua,Amazonas
010206,Imaza,Bagua,Amazonas
010301,Jumbilla,Bongara,Amazonas
010302,Corosha,Bongara,Amazonas
010303,Cuispes,Bongara,Amazonas
010304,Chisquilla,Bongara,Amazonas
010305,Churuja,Bongara,Amazonas
010306,Florida,Bongara,Amazonas
010307,Recta,Bongara,Amazonas
010308,San Carlos,Bongara,Amazonas
010309,Shipasbamba,Bongara,Amazonas
010310,Valera,Bongara,Amazonas
010311,Yambrasbamba,Bongara,Amazonas
010312,Jazan,Bongara,Amazonas
010401,Lamud,Luya,Amazonas
010402,Camporredondo,Luya,Amazonas
010403,Cocabamba,Luya,Amazonas
010404,Colcamar,Luya,Amazonas
010405,Conila,Luya,Amazonas
010406,Inguilpata,Luya,Amazonas
010407,Longuita,Luya,Amazonas
010408,Lonya Chico,Luya,Amazonas
010409,Luya,Luya,Amazonas
010410,Luya Viejo,Luya,Amazonas
010411,Maria,Luya,Amazonas
010412,Ocalli,Luya,Amazonas
010413,Ocumal,Luya,Amazonas
010414,Pisuquia,Luya,Amazonas
010415,San Cristobal,Luya,Amazonas
010416,San Francisco del Yeso,Luya,Amazonas
010417,San Jeronimo,Luya,Amazonas
010418,San Juan de Lopecancha,Luya,Amazonas
010419,Santa Catalina,Luya,Amazonas
010420,Santo Tomas,Luya,Amazonas
010421,Tingo,Luya,Amazonas
010422,Trita,Luya,Amazonas
010423,Providencia,Luya,Amazonas
010501,San Nicolas,Rodriguez de Mendoza,Amazonas
010502,Cochamal,Rodriguez de Mendoza,Amazonas
010503,Chirimoto,Rodriguez de Mendoza,Amazonas
010504,Huambo,Rodriguez de Mendoza,Amazonas
010505,Limabamba,Rodriguez de Mendoza,Amazonas
010506,Longar,Rodriguez de Mendoza,Amazonas
010507,Milpuc,Rodriguez de Mendoza,Amazonas
010508,Mariscal Benavides,Rodriguez de Mendoza,Amazonas
010509,Omia,Rodriguez de Mendoza,Amazonas
010510,Santa Rosa,Rodriguez de Mendoza,Amazonas
010511,Totora,Rodriguez de Mendoza,Amazonas
010512,Vista Alegre,Rodriguez de Mendoza,Amazonas
010601,Nieva,Condorcanqui,Amazonas
010602,Rio Santiago,Condorcanqui,Amazonas
010603,El Cenepa,Condorcanqui,Amazonas
010701,Bagua Grande,Utcubamba,Amazonas
010702,Cajaruro,Utcubamba,Amazonas
010703,Cumba,Utcubamba,Amazonas
010704,El Milagro,Utcubamba,Amazonas
010705,Jamalca,Utcubamba,Amazonas
010706,Lonya Grande,Utcubamba,Amazonas
010707,Yamon,Utcubamba,Amazonas
020101,Huaraz,Huaraz,Ancash
020102,Independencia,Huaraz,Ancash
020103,Cochabamba,Huaraz,Ancash
020104,Colcabamba,Huaraz,Ancash
020105,Huanchay,Huaraz,Ancash
020106,Jangas,Huaraz,Ancash
020107,La Libertad,Huaraz,Ancash
020108,Olleros,Huaraz,Ancash
020109,Pampas,Huaraz,Ancash
020110,Pariacoto,Huaraz,Ancash
020111,Pira,Huaraz,Ancash
020112,Tarica,Huaraz,Ancash
020201,Aija,Aija,Ancash
020203,Coris,Aija,Ancash
020205,Huacllan,Aija,Ancash
020206,La Merced,Aija,Ancash
020208,Succha,Aija,Ancash
020301,Chiquian,Bolognesi,Ancash
020302,Abelardo Pardo Lezameta,Bolognesi,Ancash
020304,Aquia,Bolognesi,Ancash
020305,Cajacay,Bolognesi,Ancash
020310,Huayllacayan,Bolognesi,Ancash
020311,Huasta,Bolognesi,Ancash
020313,Mangas,Bolognesi,Ancash
020315,Pacllon,Bolognesi,Ancash
020317,San Miguel de Corpanqui,Bolognesi,Ancash
020320,Ticllos,Bolognesi,Ancash
020321,Antonio Raymondi,Bolognesi,Ancash
020322,Canis,Bolognesi,Ancash
020323,Colquioc,Bolognesi,Ancash
020324,La Primavera,Bolognesi,Ancash
020325,Huallanca,Bolognesi,Ancash
020401,Carhuaz,Carhuaz,Ancash
020402,Acopampa,Carhuaz,Ancash
020403,Amashca,Carhuaz,Ancash
020404,Anta,Carhuaz,Ancash
020405,Ataquero,Carhuaz,Ancash
020406,Marcara,Carhuaz,Ancash
020407,Pariahuanca,Carhuaz,Ancash
020408,San Miguel de Aco,Carhuaz,Ancash
020409,Shilla,Carhuaz,Ancash
020410,Tinco,Carhuaz,Ancash
020411,Yungar,Carhuaz,Ancash
020501,Casma,Casma,Ancash
020502,Buena Vista Alta,Casma,Ancash
020503,Comandante Noel,Casma,Ancash
020505,Yautan,Casma,Ancash
020601,Corongo,Corongo,Ancash
020602,Aco,Corongo,Ancash
020603,Bambas,Corongo,Ancash
020604,Cusca,Corongo,Ancash
020605,La Pampa,Corongo,Ancash
020606,Yanac,Corongo,Ancash
020607,Yupan,Corongo,Ancash
020701,Caraz,Huaylas,Ancash
020702,Huallanca,Huaylas,Ancash
020703,Huata,Huaylas,Ancash
020704,Huaylas,Huaylas,Ancash
020705,Mato,Huaylas,Ancash
020706,Pamparomas,Huaylas,Ancash
020707,Pueblo Libre,Huaylas,Ancash
020708,Santa Cruz,Huaylas,Ancash
020709,Yuracmarca,Huaylas,Ancash
020710,Santo Toribio,Huaylas,Ancash
020801,Huari,Huari,Ancash
020802,Cajay,Huari,Ancash
020803,Chavin de Huantar,Huari,Ancash
020804,Huacachi,Huari,Ancash
020805,Huachis,Huari,Ancash
020806,Huacchis,Huari,Ancash
020807,Huantar,Huari,Ancash
020808,Masin,Huari,Ancash
020809,Paucas,Huari,Ancash
020810,Ponto,Huari,Ancash
020811,Rahuapampa,Huari,Ancash
020812,Rapayan,Huari,Ancash
020813,San Marcos,Huari,Ancash
020814,San Pedro de Chana,Huari,Ancash
020815,Uco,Huari,Ancash
020816,Anra,Huari,Ancash
020901,Piscobamba,Mariscal Luzuriaga,Ancash
020902,Casca,Mariscal Luzuriaga,Ancash
020903,Lucma,Mariscal Luzuriaga,Ancash
020904,Fidel Olivas Escudero,Mariscal Luzuriaga,Ancash
020905,Llama,Mariscal Luzuriaga,Ancash
020906,Llumpa,Mariscal Luzuriaga,Ancash
020907,Musga,Mariscal Luzuriaga,Ancash
020908,Eleazar Guzman Barron,Mariscal Luzuriaga,Ancash
021001,Cabana,Pallasca,Ancash
021002,Bolognesi,Pallasca,Ancash
021003,Conchucos,Pallasca,Ancash
021004,Huacaschuque,Pallasca,Ancash
021005,Huandoval,Pallasca,Ancash
021006,Lacabamba,Pallasca,Ancash
021007,Llapo,Pallasca,Ancash
021008,Pallasca,Pallasca,Ancash
021009,Pampas,Pallasca,Ancash
021010,Santa Rosa,Pallasca,Ancash
021011,Tauca,Pallasca,Ancash
021101,Pomabamba,Pomabamba,Ancash
021102,Huayllan,Pomabamba,Ancash
021103,Parobamba,Pomabamba,Ancash
021104,Quinuabamba,Pomabamba,Ancash
021201,Recuay,Recuay,Ancash
021202,Cotaparaco,Recuay,Ancash
021203,Huayllapampa,Recuay,Ancash
021204,Marca,Recuay,Ancash
021205,Pampas Chico,Recuay,Ancash
021206,Pararin,Recuay,Ancash
021207,Tapacocha,Recuay,Ancash
021208,Ticapampa,Recuay,Ancash
021209,Llacllin,Recuay,Ancash
021210,Catac,Recuay,Ancash
021301,Chimbote,Santa,Ancash
021302,Caceres del Peru,Santa,Ancash
021303,Macate,Santa,Ancash
021304,Moro,Santa,Ancash
021305,Nepeña,Santa,Ancash
021306,Samanco,Santa,Ancash
021307,Santa,Santa,Ancash
021308,Coishco,Santa,Ancash
021309,Nuevo Chimbote,Santa,Ancash
021401,Sihuas,Sihuas,Ancash
021402,Alfonso Ugarte,Sihuas,Ancash
021403,Chingalpo,Sihuas,Ancash
021404,Huayllabamba,Sihuas,Ancash
021405,Quiches,Sihuas,Ancash
021406,Sicsibamba,Sihuas,Ancash
021407,Acobamba,Sihuas,Ancash
021408,Cashapampa,Sihuas,Ancash
021409,Ragash,Sihuas,Ancash
021410,San Juan,Sihuas,Ancash
021501,Yungay,Yungay,Ancash
021502,Cascapara,Yungay,Ancash
021503,Mancos,Yungay,Ancash
021504,Matacoto,Yungay,Ancash
021505,Quillo,Yungay,Ancash
021506,Ranrahirca,Yungay,Ancash
021507,Shupluy,Yungay,Ancash
021508,Yanama,Yungay,Ancash
021601,Llamellin,Antonio Raymondi,Ancash
021602,Aczo,Antonio Raymondi,Ancash
021603,Chaccho,Antonio Raymondi,Ancash
021604,Chingas,Antonio Raymondi,Ancash
021605,Mirgas,Antonio Raymondi,Ancash
021606,San Juan de Rontoy,Antonio Raymondi,Ancash
021701,San Luis,Carlos Fermin Fitzca,Ancash
021702,Yauya,Carlos Fermin Fitzca,Ancash
021703,San Nicolas,Carlos Fermin Fitzca,Ancash
021801,Chacas,Asuncion,Ancash
021802,Acochaca,Asuncion,Ancash
021901,Huarmey,Huarmey,Ancash
021902,Cochapeti,Huarmey,Ancash
021903,Huayan,Huarmey,Ancash
021904,Malvas,Huarmey,Ancash
021905,Culebras,Huarmey,Ancash
022001,Acas,Ocros,Ancash
022002,Cajamarquilla,Ocros,Ancash
022003,Carhuapampa,Ocros,Ancash
022004,Cochas,Ocros,Ancash
022005,Congas,Ocros,Ancash
022006,Llipa,Ocros,Ancash
022007,Ocros,Ocros,Ancash
022008,San Cristobal de Rajan,Ocros,Ancash
022009,San Pedro,Ocros,Ancash
022010,Santiago de Chilcas,Ocros,Ancash
030101,Abancay,Abancay,Apurimac
030102,Circa,Abancay,Apurimac
030103,Curahuasi,Abancay,Apurimac
030104,Chacoche,Abancay,Apurimac
030105,Huanipaca,Abancay,Apurimac
030106,Lambrama,Abancay,Apurimac
030107,Pichirhua,Abancay,Apurimac
030108,San Pedro de Cachora,Abancay,Apurimac
030109,Tamburco,Abancay,Apurimac
030201,Chalhuanca,Aymaraes,Apurimac
030202,Capaya,Aymaraes,Apurimac
030203,Caraybamba,Aymaraes,Apurimac
030204,Colcabamba,Aymaraes,Apurimac
030205,Cotaruse,Aymaraes,Apurimac
030206,Chapimarca,Aymaraes,Apurimac
030207,Huayllo,Aymaraes,Apurimac
030208,Lucre,Aymaraes,Apurimac
030209,Pocohuanca,Aymaraes,Apurimac
030210,Sañayca,Aymaraes,Apurimac
030211,Soraya,Aymaraes,Apurimac
030212,Tapairihua,Aymaraes,Apurimac
030213,Tintay,Aymaraes,Apurimac
030214,Toraya,Aymaraes,Apurimac
030215,Yanaca,Aymaraes,Apurimac
030216,San Juan de Chacña,Aymaraes,Apurimac
030217,Justo Apu Sahuaraura,Aymaraes,Apurimac
030301,Andahuaylas,Andahuaylas,Apurimac
030302,Andarapa,Andahuaylas,Apurimac
030303,Chiara,Andahuaylas,Apurimac
030304,Huancarama,Andahuaylas,Apurimac
030305,Huancaray,Andahuaylas,Apurimac
030306,Kishuara,Andahuaylas,Apurimac
030307,Pacobamba,Andahuaylas,Apurimac
030308,Pampachiri,Andahuaylas,Apurimac
030309,San Antonio de Cachi,Andahuaylas,Apurimac
030310,San Jeronimo,Andahuaylas,Apurimac
030311,Talavera,Andahuaylas,Apurimac
030312,Turpo,Andahuaylas,Apurimac
030313,Pacucha,Andahuaylas,Apurimac
030314,Pomacocha,Andahuaylas,Apurimac
030315,Santa Maria de Chicmo,Andahuaylas,Apurimac
030316,Tumay Huaraca,Andahuaylas,Apurimac
030317,Huayana,Andahuaylas,Apurimac
030318,San Miguel de Chaccrampa,Andahuaylas,Apurimac
030319,Kaquiabamba,Andahuaylas,Apurimac
030401,Antabamba,Antabamba,Apurimac
030402,El Oro,Antabamba,Apurimac
030403,Huaquirca,Antabamba,Apurimac
030404,Juan Espinoza Medrano,Antabamba,Apurimac
030405,Oropesa,Antabamba,Apurimac
030406,Pachaconas,Antabamba,Apurimac
030407,Sabaino,Antabamba,Apurimac
030501,Tambobamba,Cotabambas,Apurimac
030502,Coyllurqui,Cotabambas,Apurimac
030503,Cotabambas,Cotabambas,Apurimac
030504,Haquira,Cotabambas,Apurimac
030505,Mara,Cotabambas,Apurimac
030506,Challhuahuacho,Cotabambas,Apurimac
030601,Chuquibambilla,Grau,Apurimac
030602,Curpahuasi,Grau,Apurimac
030603,Huayllati,Grau,Apurimac
030604,Mamara,Grau,Apurimac
030605,Gamarra,Grau,Apurimac
030606,Micaela Bastidas,Grau,Apurimac
030607,Progreso,Grau,Apurimac
030608,Pataypampa,Grau,Apurimac
030609,San Antonio,Grau,Apurimac
030610,Turpay,Grau,Apurimac
030611,Vilcabamba,Grau,Apurimac
030612,Virundo,Grau,Apurimac
030613,Santa Rosa,Grau,Apurimac
030614,Curasco,Grau,Apurimac
030701,Chincheros,Chincheros,Apurimac
030702,Ongoy,Chincheros,Apurimac
030703,Ocobamba,Chincheros,Apurimac
030704,Cocharcas,Chincheros,Apurimac
030705,Anco_Huallo,Chincheros,Apurimac
030706,Huaccana,Chincheros,Apurimac
030707,Uranmarca,Chincheros,Apurimac
030708,Ranracancha,Chincheros,Apurimac
040101,Arequipa,Arequipa,Arequipa
040102,Cayma,Arequipa,Arequipa
040103,Cerro Colorado,Arequipa,Arequipa
040104,Characato,Arequipa,Arequipa
040105,Chiguata,Arequipa,Arequipa
040106,La Joya,Arequipa,Arequipa
040107,Miraflores,Arequipa,Arequipa
040108,Mollebaya,Arequipa,Arequipa
040109,Paucarpata,Arequipa,Arequipa
040110,Pocsi,Arequipa,Arequipa
040111,Polobaya,Arequipa,Arequipa
040112,Quequeña,Arequipa,Arequipa
040113,Sabandia,Arequipa,Arequipa
040114,Sachaca,Arequipa,Arequipa
040115,San Juan de Siguas,Arequipa,Arequipa
040116,San Juan de Tarucani,Arequipa,Arequipa
040117,Santa Isabel de Siguas,Arequipa,Arequipa
040118,Santa Rita de Siguas,Arequipa,Arequipa
040119,Socabaya,Arequipa,Arequipa
040120,Tiabaya,Arequipa,Arequipa
040121,Uchumayo,Arequipa,Arequipa
040122,Vitor,Arequipa,Arequipa
040123,Yanahuara,Arequipa,Arequipa
040124,Yarabamba,Arequipa,Arequipa
040125,Yura,Arequipa,Arequipa
040126,Mariano Melgar,Arequipa,Arequipa
040127,Jacobo Hunter,Arequipa,Arequipa
040128,Alto Selva Alegre,Arequipa,Arequipa
040129,Jose Luis Bustamante y Rivero,Arequipa,Arequipa
040201,Chivay,Caylloma,Arequipa
040202,Achoma,Caylloma,Arequipa
040203,Cabanaconde,Caylloma,Arequipa
040204,Caylloma,Caylloma,Arequipa
040205,Callalli,Caylloma,Arequipa
040206,Coporaque,Caylloma,Arequipa
040207,Huambo,Caylloma,Arequipa
040208,Huanca,Caylloma,Arequipa
040209,Ichupampa,Caylloma,Arequipa
040210,Lari,Caylloma,Arequipa
040211,Lluta,Caylloma,Arequipa
040212,Maca,Caylloma,Arequipa
040213,Madrigal,Caylloma,Arequipa
040214,San Antonio de Chuca,Caylloma,Arequipa
040215,Sibayo,Caylloma,Arequipa
040216,Tapay,Caylloma,Arequipa
040217,Tisco,Caylloma,Arequipa
040218,Tuti,Caylloma,Arequipa
040219,Yanque,Caylloma,Arequipa
040220,Majes,Caylloma,Arequipa
040301,Camana,Camana,Arequipa
040302,Jose Maria Quimper,Camana,Arequipa
040303,Mariano Nicolas Valcarcel,Camana,Arequipa
040304,Mariscal Caceres,Camana,Arequipa
040305,Nicolas de Pierola,Camana,Arequipa
040306,Ocoña,Camana,Arequipa
040307,Quilca,Camana,Arequipa
040308,Samuel Pastor,Camana,Arequipa
040401,Caraveli,Caraveli,Arequipa
040402,Acari,Caraveli,Arequipa
040403,Atico,Caraveli,Arequipa
040404,Atiquipa,Caraveli,Arequipa
040405,Bella Union,Caraveli,Arequipa
040406,Cahuacho,Caraveli,Arequipa
040407,Chala,Caraveli,Arequipa
040408,Chaparra,Caraveli,Arequipa
040409,Huanuhuanu,Caraveli,Arequipa
040410,Jaqui,Caraveli,Arequipa
040411,Lomas,Caraveli,Arequipa
040412,Quicacha,Caraveli,Arequipa
040413,Yauca,Caraveli,Arequipa
040501,Aplao,Castilla,Arequipa
040502,Andagua,Castilla,Arequipa
040503,Ayo,Castilla,Arequipa
040504,Chachas,Castilla,Arequipa
040505,Chilcaymarca,Castilla,Arequipa
040506,Choco,Castilla,Arequipa
040507,Huancarqui,Castilla,Arequipa
040508,Machaguay,Castilla,Arequipa
040509,Orcopampa,Castilla,Arequipa
040510,Pampacolca,Castilla,Arequipa
040511,Tipan,Castilla,Arequipa
040512,Uraca,Castilla,Arequipa
040513,Uñon,Castilla,Arequipa
040514,Viraco,Castilla,Arequipa
040601,Chuquibamba,Condesuyos,Arequipa
040602,Andaray,Condesuyos,Arequipa
040603,Cayarani,Condesuyos,Arequipa
040604,Chichas,Condesuyos,Arequipa
040605,Iray,Condesuyos,Arequipa
040606,Salamanca,Condesuyos,Arequipa
040607,Yanaquihua,Condesuyos,Arequipa
040608,Rio Grande,Condesuyos,Arequipa
040701,Mollendo,Islay,Arequipa
040702,Cocachacra,Islay,Arequipa
040703,Dean Valdivia,Islay,Arequipa
040704,Islay,Islay,Arequipa
040705,Mejia,Islay,Arequipa
040706,Punta de Bombon,Islay,Arequipa
040801,Cotahuasi,La Union,Arequipa
040802,Alca,La Union,Arequipa
040803,Charcana,La Union,Arequipa
040804,Huaynacotas,La Union,Arequipa
040805,Pampamarca,La Union,Arequipa
040806,Puyca,La Union,Arequipa
040807,Quechualla,La Union,Arequipa
040808,Sayla,La Union,Arequipa
040809,Tauria,La Union,Arequipa
040810,Tomepampa,La Union,Arequipa
040811,Toro,La Union,Arequipa
050101,Ayacucho,Huamanga,Ayacucho
050102,Acos Vinchos,Huamanga,Ayacucho
050103,Carmen Alto,Huamanga,Ayacucho
050104,Chiara,Huamanga,Ayacucho
050105,Quinua,Huamanga,Ayacucho
050106,San Jose de Ticllas,Huamanga,Ayacucho
050107,San Juan Bautista,Huamanga,Ayacucho
050108,Santiago de Pischa,Huamanga,Ayacucho
050109,Vinchos,Huamanga,Ayacucho
050110,Tambillo,Huamanga,Ayacucho
050111,Acocro,Huamanga,Ayacucho
050112,Socos,Huamanga,Ayacucho
050113,Ocros,Huamanga,Ayacucho
050114,Pacaycasa,Huamanga,Ayacucho
050115,Jesus Nazareno,Huamanga,Ayacucho
050201,Cangallo,Cangallo,Ayacucho
050204,Chuschi,Cangallo,Ayacucho
050206,Los Morochucos,Cangallo,Ayacucho
050207,Paras,Cangallo,Ayacucho
050208,Totos,Cangallo,Ayacucho
050211,Maria Parado de Bellido,Cangallo,Ayacucho
050301,Huanta,Huanta,Ayacucho
050302,Ayahuanco,Huanta,Ayacucho
050303,Huamanguilla,Huanta,Ayacucho
050304,Iguain,Huanta,Ayacucho
050305,Luricocha,Huanta,Ayacucho
050307,Santillana,Huanta,Ayacucho
050308,Sivia,Huanta,Ayacucho
050309,Llochegua,Huanta,Ayacucho
050401,San Miguel,La Mar,Ayacucho
050402,Anco,La Mar,Ayacucho
050403,Ayna,La Mar,Ayacucho
050404,Chilcas,La Mar,Ayacucho
050405,Chungui,La Mar,Ayacucho
050406,Tambo,La Mar,Ayacucho
050407,Luis Carranza,La Mar,Ayacucho
050408,Santa Rosa,La Mar,Ayacucho
050409,Samugari,La Mar,Ayacucho
050501,Puquio,Lucanas,Ayacucho
050502,Aucara,Lucanas,Ayacucho
050503,Cabana,Lucanas,Ayacucho
050504,Carmen Salcedo,Lucanas,Ayacucho
050506,Chaviña,Lucanas,Ayacucho
050508,Chipao,Lucanas,Ayacucho
050510,Huac-Huas,Lucanas,Ayacucho
050511,Laramate,Lucanas,Ayacucho
050512,Leoncio Prado,Lucanas,Ayacucho
050513,Lucanas,Lucanas,Ayacucho
050514,Llauta,Lucanas,Ayacucho
050516,Ocaña,Lucanas,Ayacucho
050517,Otoca,Lucanas,Ayacucho
050520,Sancos,Lucanas,Ayacucho
050521,San Juan,Lucanas,Ayacucho
050522,San Pedro,Lucanas,Ayacucho
050524,Santa Ana de Huaycahuacho,Lucanas,Ayacucho
050525,Santa Lucia,Lucanas,Ayacucho
050529,Saisa,Lucanas,Ayacucho
050531,San Pedro de Palco,Lucanas,Ayacucho
050532,San Cristobal,Lucanas,Ayacucho
050601,Coracora,Parinacochas,Ayacucho
050604,Coronel Castañeda,Parinacochas,Ayacucho
050605,Chumpi,Parinacochas,Ayacucho
050608,Pacapausa,Parinacochas,Ayacucho
050611,Pullo,Parinacochas,Ayacucho
050612,Puyusca,Parinacochas,Ayacucho
050615,San Francisco de Ravacayco,Parinacochas,Ayacucho
050616,Upahuacho,Parinacochas,Ayacucho
050701,Huancapi,Victor Fajardo,Ayacucho
050702,Alcamenca,Victor Fajardo,Ayacucho
050703,Apongo,Victor Fajardo,Ayacucho
050704,Canaria,Victor Fajardo,Ayacucho
050706,Cayara,Victor Fajardo,Ayacucho
050707,Colca,Victor Fajardo,Ayacucho
050708,Huaya,Victor Fajardo,Ayacucho
050709,Huamanquiquia,Victor Fajardo,Ayacucho
050710,Huancaraylla,Victor Fajardo,Ayacucho
050713,Sarhua,Victor Fajardo,Ayacucho
050714,Vilcanchos,Victor Fajardo,Ayacucho
050715,Asquipata,Victor Fajardo,Ayacucho
050801,Sancos,Huanca Sancos,Ayacucho
050802,Sacsamarca,Huanca Sancos,Ayacucho
050803,Santiago de Lucanamarca,Huanca Sancos,Ayacucho
050804,Carapo,Huanca Sancos,Ayacucho
050901,Vilcas Huaman,Vilcas Huaman,Ayacucho
050902,Vischongo,Vilcas Huaman,Ayacucho
050903,Accomarca,Vilcas Huaman,Ayacucho
050904,Carhuanca,Vilcas Huaman,Ayacucho
050905,Concepcion,Vilcas Huaman,Ayacucho
050906,Huambalpa,Vilcas Huaman,Ayacucho
050907,Saurama,Vilcas Huaman,Ayacucho
050908,Independencia,Vilcas Huaman,Ayacucho
051001,Pausa,Paucar del Sara Sara,Ayacucho
051002,Colta,Paucar del Sara Sara,Ayacucho
051003,Corculla,Paucar del Sara Sara,Ayacucho
051004,Lampa,Paucar del Sara Sara,Ayacucho
051005,Marcabamba,Paucar del Sara Sara,Ayacucho
051006,Oyolo,Paucar del Sara Sara,Ayacucho
051007,Pararca,Paucar del Sara Sara,Ayacucho
051008,San Javier de Alpabamba,Paucar del Sara Sara,Ayacucho
051009,San Jose de Ushua,Paucar del Sara Sara,Ayacucho
051010,Sara Sara,Paucar del Sara Sara,Ayacucho
051101,Querobamba,Sucre,Ayacucho
051102,Belen,Sucre,Ayacucho
051103,Chalcos,Sucre,Ayacucho
051104,San Salvador de Quije,Sucre,Ayacucho
051105,Paico,Sucre,Ayacucho
051106,Santiago de Paucaray,Sucre,Ayacucho
051107,San Pedro de Larcay,Sucre,Ayacucho
051108,Soras,Sucre,Ayacucho
051109,Huacaña,Sucre,Ayacucho
051110,Chilcayoc,Sucre,Ayacucho
051111,Morcolla,Sucre,Ayacucho
060101,Cajamarca,Cajamarca,Cajamarca
060102,Asuncion,Cajamarca,Cajamarca
060103,Cospan,Cajamarca,Cajamarca
060104,Chetilla,Cajamarca,Cajamarca
060105,Encañada,Cajamarca,Cajamarca
060106,Jesus,Cajamarca,Cajamarca
060107,Los Baños del Inca,Cajamarca,Cajamarca
060108,Llacanora,Cajamarca,Cajamarca
060109,Magdalena,Cajamarca,Cajamarca
060110,Matara,Cajamarca,Cajamarca
060111,Namora,Cajamarca,Cajamarca
060112,San Juan,Cajamarca,Cajamarca
060201,Cajabamba,Cajabamba,Cajamarca
060202,Cachachi,Cajabamba,Cajamarca
060203,Condebamba,Cajabamba,Cajamarca
060205,Sitacocha,Cajabamba,Cajamarca
060301,Celendin,Celendin,Cajamarca
060302,Cortegana,Celendin,Cajamarca
060303,Chumuch,Celendin,Cajamarca
060304,Huasmin,Celendin,Cajamarca
060305,Jorge Chavez,Celendin,Cajamarca
060306,Jose Galvez,Celendin,Cajamarca
060307,Miguel Iglesias,Celendin,Cajamarca
060308,Oxamarca,Celendin,Cajamarca
060309,Sorochuco,Celendin,Cajamarca
060310,Sucre,Celendin,Cajamarca
060311,Utco,Celendin,Cajamarca
060312,La Libertad de Pallan,Celendin,Cajamarca
060401,Contumaza,Contumaza,Cajamarca
060403,Chilete,Contumaza,Cajamarca
060404,Guzmango,Contumaza,Cajamarca
060405,San Benito,Contumaza,Cajamarca
060406,Cupisnique,Contumaza,Cajamarca
060407,Tantarica,Contumaza,Cajamarca
060408,Yonan,Contumaza,Cajamarca
060409,Santa Cruz de Toled,Contumaza,Cajamarca
060501,Cutervo,Cutervo,Cajamarca
060502,Callayuc,Cutervo,Cajamarca
060503,Cujillo,Cutervo,Cajamarca
060504,Choros,Cutervo,Cajamarca
060505,La Ramada,Cutervo,Cajamarca
060506,Pimpingos,Cutervo,Cajamarca
060507,Querocotillo,Cutervo,Cajamarca
060508,San Andres de Cutervo,Cutervo,Cajamarca
060509,San Juan de Cutervo,Cutervo,Cajamarca
060510,San Luis de Lucma,Cutervo,Cajamarca
060511,Santa Cruz,Cutervo,Cajamarca
060512,Santo Domingo de La Capilla,Cutervo,Cajamarca
060513,Santo Tomas,Cutervo,Cajamarca
060514,Socota,Cutervo,Cajamarca
060515,Toribio Casanova,Cutervo,Cajamarca
060601,Chota,Chota,Cajamarca
060602,Anguia,Chota,Cajamarca
060603,Cochabamba,Chota,Cajamarca
060604,Conchan,Chota,Cajamarca
060605,Chadin,Chota,Cajamarca
060606,Chiguirip,Chota,Cajamarca
060607,Chimban,Chota,Cajamarca
060608,Huambos,Chota,Cajamarca
060609,Lajas,Chota,Cajamarca
060610,Llama,Chota,Cajamarca
060611,Miracosta,Chota,Cajamarca
060612,Paccha,Chota,Cajamarca
060613,Pion,Chota,Cajamarca
060614,Querocoto,Chota,Cajamarca
060615,Tacabamba,Chota,Cajamarca
060616,Tocmoche,Chota,Cajamarca
060617,San Juan de Licupis,Chota,Cajamarca
060618,Choropampa,Chota,Cajamarca
060619,Chalamarca,Chota,Cajamarca
060701,Bambamarca,Hualgayoc,Cajamarca
060702,Chugur,Hualgayoc,Cajamarca
060703,Hualgayoc,Hualgayoc,Cajamarca
060801,Jaen,Jaen,Cajamarca
060802,Bellavista,Jaen,Cajamarca
060803,Colasay,Jaen,Cajamarca
060804,Chontali,Jaen,Cajamarca
060805,Pomahuaca,Jaen,Cajamarca
060806,Pucara,Jaen,Cajamarca
060807,Sallique,Jaen,Cajamarca
060808,San Felipe,Jaen,Cajamarca
060809,San Jose del Alto,Jaen,Cajamarca
060810,Santa Rosa,Jaen,Cajamarca
060811,Las Pirias,Jaen,Cajamarca
060812,Huabal,Jaen,Cajamarca
060901,Santa Cruz,Santa Cruz,Cajamarca
060902,Catache,Santa Cruz,Cajamarca
060903,Chancaybaños,Santa Cruz,Cajamarca
060904,La Esperanza,Santa Cruz,Cajamarca
060905,Ninabamba,Santa Cruz,Cajamarca
060906,Pulan,Santa Cruz,Cajamarca
060907,Sexi,Santa Cruz,Cajamarca
060908,Uticyacu,Santa Cruz,Cajamarca
060909,Yauyucan,Santa Cruz,Cajamarca
060910,Andabamba,Santa Cruz,Cajamarca
060911,Saucepampa,Santa Cruz,Cajamarca
061001,San Miguel,San Miguel,Cajamarca
061002,Calquis,San Miguel,Cajamarca
061003,La Florida,San Miguel,Cajamarca
061004,Llapa,San Miguel,Cajamarca
061005,Nanchoc,San Miguel,Cajamarca
061006,Niepos,San Miguel,Cajamarca
061007,San Gregorio,San Miguel,Cajamarca
061008,San Silvestre de Cochan,San Miguel,Cajamarca
061009,El Prado,San Miguel,Cajamarca
061010,Union Agua Blanca,San Miguel,Cajamarca
061011,Tongod,San Miguel,Cajamarca
061012,Catilluc,San Miguel,Cajamarca
061013,Bolivar,San Miguel,Cajamarca
061101,San Ignacio,San Ignacio,Cajamarca
061102,Chirinos,San Ignacio,Cajamarca
061103,Huarango,San Ignacio,Cajamarca
061104,Namballe,San Ignacio,Cajamarca
061105,La Coipa,San Ignacio,Cajamarca
061106,San Jose de Lourdes,San Ignacio,Cajamarca
061107,Tabaconas,San Ignacio,Cajamarca
061201,Pedro Galvez,San Marcos,Cajamarca
061202,Ichocan,San Marcos,Cajamarca
061203,Gregorio Pita,San Marcos,Cajamarca
061204,Jose Manuel Quiroz,San Marcos,Cajamarca
061205,Eduardo Villanueva,San Marcos,Cajamarca
061206,Jose Sabogal,San Marcos,Cajamarca
061207,Chancay,San Marcos,Cajamarca
061301,San Pablo,San Pablo,Cajamarca
061302,San Bernardino,San Pablo,Cajamarca
061303,San Luis,San Pablo,Cajamarca
061304,Tumbaden,San Pablo,Cajamarca
070101,Cusco,Cusco,Cusco
070102,Ccorca,Cusco,Cusco
070103,Poroy,Cusco,Cusco
070104,San Jeronimo,Cusco,Cusco
070105,San Sebastian,Cusco,Cusco
070106,Santiago,Cusco,Cusco
070107,Saylla,Cusco,Cusco
070108,Wanchaq,Cusco,Cusco
070201,Acomayo,Acomayo,Cusco
070202,Acopia,Acomayo,Cusco
070203,Acos,Acomayo,Cusco
070204,Pomacanchi,Acomayo,Cusco
070205,Rondocan,Acomayo,Cusco
070206,Sangarara,Acomayo,Cusco
070207,Mosoc Llacta,Acomayo,Cusco
070301,Anta,Anta,Cusco
070302,Chinchaypujio,Anta,Cusco
070303,Huarocondo,Anta,Cusco
070304,Limatambo,Anta,Cusco
070305,Mollepata,Anta,Cusco
070306,Pucyura,Anta,Cusco
070307,Zurite,Anta,Cusco
070308,Cachimayo,Anta,Cusco
070309,Ancahuasi,Anta,Cusco
070401,Calca,Calca,Cusco
070402,Coya,Calca,Cusco
070403,Lamay,Calca,Cusco
070404,Lares,Calca,Cusco
070405,Pisac,Calca,Cusco
070406,San Salvador,Calca,Cusco
070407,Taray,Calca,Cusco
070408,Yanatile,Calca,Cusco
070501,Yanaoca,Canas,Cusco
070502,Checca,Canas,Cusco
070503,Kunturkanki,Canas,Cusco
070504,Langui,Canas,Cusco
070505,Layo,Canas,Cusco
070506,Pampamarca,Canas,Cusco
070507,Quehue,Canas,Cusco
070508,Tupac Amaru,Canas,Cusco
070601,Sicuani,Canchis,Cusco
070602,Combapata,Canchis,Cusco
070603,Checacupe,Canchis,Cusco
070604,Marangani,Canchis,Cusco
070605,Pitumarca,Canchis,Cusco
070606,San Pablo,Canchis,Cusco
070607,San Pedro,Canchis,Cusco
070608,Tinta,Canchis,Cusco
070701,Santo Tomas,Chumbivilcas,Cusco
070702,Capacmarca,Chumbivilcas,Cusco
070703,Colquemarca,Chumbivilcas,Cusco
070704,Chamaca,Chumbivilcas,Cusco
070705,Livitaca,Chumbivilcas,Cusco
070706,Llusco,Chumbivilcas,Cusco
070707,Quiñota,Chumbivilcas,Cusco
070708,Velille,Chumbivilcas,Cusco
070801,Espinar,Espinar,Cusco
070802,Condoroma,Espinar,Cusco
070803,Coporaque,Espinar,Cusco
070804,Ocoruro,Espinar,Cusco
070805,Pallpata,Espinar,Cusco
070806,Pichigua,Espinar,Cusco
070807,Suyckutambo,Espinar,Cusco
070808,Alto Pichigua,Espinar,Cusco
070901,Santa Ana,La Convencion,Cusco
070902,Echarate,La Convencion,Cusco
070903,Huayopata,La Convencion,Cusco
070904,Maranura,La Convencion,Cusco
070905,Ocobamba,La Convencion,Cusco
070906,Santa Teresa,La Convencion,Cusco
070907,Vilcabamba,La Convencion,Cusco
070908,Quellouno,La Convencion,Cusco
070909,Kimbiri,La Convencion,Cusco
070910,Pichari,La Convencion,Cusco
071001,Paruro,Paruro,Cusco
071002,Accha,Paruro,Cusco
071003,Ccapi,Paruro,Cusco
071004,Colcha,Paruro,Cusco
071005,Huanoquite,Paruro,Cusco
071006,Omacha,Paruro,Cusco
071007,Yaurisque,Paruro,Cusco
071008,Paccaritambo,Paruro,Cusco
071009,Pillpinto,Paruro,Cusco
071101,Paucartambo,Paucartambo,Cusco
071102,Caicay,Paucartambo,Cusco
071103,Colquepata,Paucartambo,Cusco
071104,Challabamba,Paucartambo,Cusco
071105,Kosñipata,Paucartambo,Cusco
071106,Huancarani,Paucartambo,Cusco
071201,Urcos,Quispicanchi,Cusco
071202,Andahuaylillas,Quispicanchi,Cusco
071203,Camanti,Quispicanchi,Cusco
071204,Ccarhuayo,Quispicanchi,Cusco
071205,Ccatca,Quispicanchi,Cusco
071206,Cusipata,Quispicanchi,Cusco
071207,Huaro,Quispicanchi,Cusco
071208,Lucre,Quispicanchi,Cusco
071209,Marcapata,Quispicanchi,Cusco
071210,Ocongate,Quispicanchi,Cusco
071211,Oropesa,Quispicanchi,Cusco
071212,Quiquijana,Quispicanchi,Cusco
071301,Urubamba,Urubamba,Cusco
071302,Chinchero,Urubamba,Cusco
071303,Huayllabamba,Urubamba,Cusco
071304,Machupicchu,Urubamba,Cusco
071305,Maras,Urubamba,Cusco
071306,Ollantaytambo,Urubamba,Cusco
071307,Yucay,Urubamba,Cusco
080101,Huancavelica,Huancavelica,Huancavelica
080102,Acobambilla,Huancavelica,Huancavelica
080103,Acoria,Huancavelica,Huancavelica
080104,Conayca,Huancavelica,Huancavelica
080105,Cuenca,Huancavelica,Huancavelica
080106,Huachocolpa,Huancavelica,Huancavelica
080108,Huayllahuara,Huancavelica,Huancavelica
080109,Izcuchaca,Huancavelica,Huancavelica
080110,Laria,Huancavelica,Huancavelica
080111,Manta,Huancavelica,Huancavelica
080112,Mariscal Caceres,Huancavelica,Huancavelica
080113,Moya,Huancavelica,Huancavelica
080114,Nuevo Occoro,Huancavelica,Huancavelica
080115,Palca,Huancavelica,Huancavelica
080116,Pilchaca,Huancavelica,Huancavelica
080117,Vilca,Huancavelica,Huancavelica
080118,Yauli,Huancavelica,Huancavelica
080119,Ascension,Huancavelica,Huancavelica
080120,Huando,Huancavelica,Huancavelica
080201,Acobamba,Acobamba,Huancavelica
080202,Anta,Acobamba,Huancavelica
080203,Andabamba,Acobamba,Huancavelica
080204,Caja,Acobamba,Huancavelica
080205,Marcas,Acobamba,Huancavelica
080206,Paucara,Acobamba,Huancavelica
080207,Pomacocha,Acobamba,Huancavelica
080208,Rosario,Acobamba,Huancavelica
080301,Lircay,Angaraes,Huancavelica
080302,Anchonga,Angaraes,Huancavelica
080303,Callanmarca,Angaraes,Huancavelica
080304,Congalla,Angaraes,Huancavelica
080305,Chincho,Angaraes,Huancavelica
080306,Huayllay Grande,Angaraes,Huancavelica
080307,Huanca-Huanca,Angaraes,Huancavelica
080308,Julcamarca,Angaraes,Huancavelica
080309,San Antonio de Antaparco,Angaraes,Huancavelica
080310,Santo Tomas de Pata,Angaraes,Huancavelica
080311,Secclla,Angaraes,Huancavelica
080312,Ccochaccasa,Angaraes,Huancavelica
080401,Castrovirreyna,Castrovirreyna,Huancavelica
080402,Arma,Castrovirreyna,Huancavelica
080403,Aurahua,Castrovirreyna,Huancavelica
080405,Capillas,Castrovirreyna,Huancavelica
080406,Cocas,Castrovirreyna,Huancavelica
080408,Chupamarca,Castrovirreyna,Huancavelica
080409,Huachos,Castrovirreyna,Huancavelica
080410,Huamatambo,Castrovirreyna,Huancavelica
080414,Mollepampa,Castrovirreyna,Huancavelica
080422,San Juan,Castrovirreyna,Huancavelica
080427,Tantara,Castrovirreyna,Huancavelica
080428,Ticrapo,Castrovirreyna,Huancavelica
080429,Santa Ana,Castrovirreyna,Huancavelica
080501,Pampas,Tayacaja,Huancavelica
080502,Acostambo,Tayacaja,Huancavelica
080503,Acraquia,Tayacaja,Huancavelica
080504,Ahuaycha,Tayacaja,Huancavelica
080506,Colcabamba,Tayacaja,Huancavelica
080509,Daniel Hernandez,Tayacaja,Huancavelica
080511,Huachocolpa,Tayacaja,Huancavelica
080512,Huaribamba,Tayacaja,Huancavelica
080515,Ñahuimpuquio,Tayacaja,Huancavelica
080517,Pazos,Tayacaja,Huancavelica
080518,Quishuar,Tayacaja,Huancavelica
080519,Salcabamba,Tayacaja,Huancavelica
080520,San Marcos de Rocchac,Tayacaja,Huancavelica
080523,Surcubamba,Tayacaja,Huancavelica
080525,Tintay Puncu,Tayacaja,Huancavelica
080526,Salcahuasi,Tayacaja,Huancavelica
080601,Ayavi,Huaytara,Huancavelica
080602,Cordova,Huaytara,Huancavelica
080603,Huayacundo Arma,Huaytara,Huancavelica
080604,Huaytara,Huaytara,Huancavelica
080605,Laramarca,Huaytara,Huancavelica
080606,Ocoyo,Huaytara,Huancavelica
080607,Pilpichaca,Huaytara,Huancavelica
080608,Querco,Huaytara,Huancavelica
080609,Quito-Arma,Huaytara,Huancavelica
080610,San Antonio de Cusicancha,Huaytara,Huancavelica
080611,San Francisco de Sangayaico,Huaytara,Huancavelica
080612,San Isidro,Huaytara,Huancavelica
080613,Santiago de Chocorvos,Huaytara,Huancavelica
080614,Santiago de Quirahuara,Huaytara,Huancavelica
080615,Santo Domingo de Capillas,Huaytara,Huancavelica
080616,Tambo,Huaytara,Huancavelica
080701,Churcampa,Churcampa,Huancavelica
080702,Anco,Churcampa,Huancavelica
080703,Chinchihuasi,Churcampa,Huancavelica
080704,El Carmen,Churcampa,Huancavelica
080705,La Merced,Churcampa,Huancavelica
080706,Locroja,Churcampa,Huancavelica
080707,Paucarbamba,Churcampa,Huancavelica
080708,San Miguel de Mayocc,Churcampa,Huancavelica
080709,San Pedro de Coris,Churcampa,Huancavelica
080710,Pachamarca,Churcampa,Huancavelica
080711,Cosme,Churcampa,Huancavelica
090101,Huanuco,Huanuco,Huanuco
090102,Chinchao,Huanuco,Huanuco
090103,Churubamba,Huanuco,Huanuco
090104,Margos,Huanuco,Huanuco
090105,Quisqui,Huanuco,Huanuco
090106,San Francisco de Cayran,Huanuco,Huanuco
090107,San Pedro de Chaulan,Huanuco,Huanuco
090108,Santa Maria del Valle,Huanuco,Huanuco
090109,Yarumayo,Huanuco,Huanuco
090110,Amarilis,Huanuco,Huanuco
090111,Pillco Marca,Huanuco,Huanuco
090112,Yacus,Huanuco,Huanuco
090201,Ambo,Ambo,Huanuco
090202,Cayna,Ambo,Huanuco
090203,Colpas,Ambo,Huanuco
090204,Conchamarca,Ambo,Huanuco
090205,Huacar,Ambo,Huanuco
090206,San Francisco,Ambo,Huanuco
090207,San Rafael,Ambo,Huanuco
090208,Tomay Kichwa,Ambo,Huanuco
090301,La Union,Dos de Mayo,Huanuco
090307,Chuquis,Dos de Mayo,Huanuco
090312,Marias,Dos de Mayo,Huanuco
090314,Pachas,Dos de Mayo,Huanuco
090316,Quivilla,Dos de Mayo,Huanuco
090317,Ripan,Dos de Mayo,Huanuco
090321,Shunqui,Dos de Mayo,Huanuco
090322,Sillapata,Dos de Mayo,Huanuco
090323,Yanas,Dos de Mayo,Huanuco
090401,Llata,Huamalies,Huanuco
090402,Arancay,Huamalies,Huanuco
090403,Chavin de Pariarca,Huamalies,Huanuco
090404,Jacas Grande,Huamalies,Huanuco
090405,Jircan,Huamalies,Huanuco
090406,Miraflores,Huamalies,Huanuco
090407,Monzon,Huamalies,Huanuco
090408,Punchao,Huamalies,Huanuco
090409,Puños,Huamalies,Huanuco
090410,Singa,Huamalies,Huanuco
090411,Tantamayo,Huamalies,Huanuco
090501,Huacrachuco,Marañon,Huanuco
090502,Cholon,Marañon,Huanuco
090505,San Buenaventura,Marañon,Huanuco
090601,Rupa-Rupa,Leoncio Prado,Huanuco
090602,Daniel Alomias Robles,Leoncio Prado,Huanuco
090603,Hermilio Valdizan,Leoncio Prado,Huanuco
090604,Luyando,Leoncio Prado,Huanuco
090605,Mariano Damaso Beraun,Leoncio Prado,Huanuco
090606,Jose Crespo y Castillo,Leoncio Prado,Huanuco
090701,Panao,Pachitea,Huanuco
090702,Chaglla,Pachitea,Huanuco
090704,Molino,Pachitea,Huanuco
090706,Umari,Pachitea,Huanuco
090801,Honoria,Puerto Inca,Huanuco
090802,Puerto Inca,Puerto Inca,Huanuco
090803,Codo del Pozuzo,Puerto Inca,Huanuco
090804,Tournavista,Puerto Inca,Huanuco
090805,Yuyapichis,Puerto Inca,Huanuco
090901,Huacaybamba,Huacaybamba,Huanuco
090902,Pinra,Huacaybamba,Huanuco
090903,Canchabamba,Huacaybamba,Huanuco
090904,Cochabamba,Huacaybamba,Huanuco
091001,Jesus,Lauricocha,Huanuco
091002,Baños,Lauricocha,Huanuco
091003,San Francisco de Asis,Lauricocha,Huanuco
091004,Queropalca,Lauricocha,Huanuco
091005,San Miguel de Cauri,Lauricocha,Huanuco
091006,Rondos,Lauricocha,Huanuco
091007,Jivia,Lauricocha,Huanuco
091101,Chavinillo,Yarowilca,Huanuco
091102,Aparicio Pomares,Yarowilca,Huanuco
091103,Cahuac,Yarowilca,Huanuco
091104,Chacabamba,Yarowilca,Huanuco
091105,Jacas Chico,Yarowilca,Huanuco
091106,Obas,Yarowilca,Huanuco
091107,Pampamarca,Yarowilca,Huanuco
091108,Choras,Yarowilca,Huanuco
100101,Ica,Ica,Ica
100102,La Tinguiña,Ica,Ica
100103,Los Aquijes,Ica,Ica
100104,Parcona,Ica,Ica
100105,Pueblo Nuevo,Ica,Ica
100106,Salas,Ica,Ica
100107,San Jose de los Molinos,Ica,Ica
100108,San Juan Bautista,Ica,Ica
100109,Santiago,Ica,Ica
100110,Subtanjalla,Ica,Ica
100111,Yauca del Rosario,Ica,Ica
100112,Tate,Ica,Ica
100113,Pachacutec,Ica,Ica
100114,Ocucaje,Ica,Ica
100201,Chincha Alta,Chincha,Ica
100202,Chavin,Chincha,Ica
100203,Chincha Baja,Chincha,Ica
100204,El Carmen,Chincha,Ica
100205,Grocio Prado,Chincha,Ica
100206,San Pedro de Huacarpana,Chincha,Ica
100207,Sunampe,Chincha,Ica
100208,Tambo de Mora,Chincha,Ica
100209,Alto Laran,Chincha,Ica
100210,Pueblo Nuevo,Chincha,Ica
100211,San Juan de Yanac,Chincha,Ica
100301,Nazca,Nazca,Ica
100302,Changuillo,Nazca,Ica
100303,El Ingenio,Nazca,Ica
100304,Marcona,Nazca,Ica
100305,Vista Alegre,Nazca,Ica
100401,Pisco,Pisco,Ica
100402,Huancano,Pisco,Ica
100403,Humay,Pisco,Ica
100404,Independencia,Pisco,Ica
100405,Paracas,Pisco,Ica
100406,San Andres,Pisco,Ica
100407,San Clemente,Pisco,Ica
100408,Tupac Amaru Inca,Pisco,Ica
100501,Palpa,Palpa,Ica
100502,Llipata,Palpa,Ica
100503,Rio Grande,Palpa,Ica
100504,Santa Cruz,Palpa,Ica
100505,Tibillo,Palpa,Ica
110101,Huancayo,Huancayo,Junin
110103,Carhuacallanga,Huancayo,Junin
110104,Colca,Huancayo,Junin
110105,Cullhuas,Huancayo,Junin
110106,Chacapampa,Huancayo,Junin
110107,Chicche,Huancayo,Junin
110108,Chilca,Huancayo,Junin
110109,Chongos Alto,Huancayo,Junin
110112,Chupuro,Huancayo,Junin
110113,El Tambo,Huancayo,Junin
110114,Huacrapuquio,Huancayo,Junin
110116,Hualhuas,Huancayo,Junin
110118,Huancan,Huancayo,Junin
110119,Huasicancha,Huancayo,Junin
110120,Huayucachi,Huancayo,Junin
110121,Ingenio,Huancayo,Junin
110122,Pariahuanca,Huancayo,Junin
110123,Pilcomayo,Huancayo,Junin
110124,Pucara,Huancayo,Junin
110125,Quichuay,Huancayo,Junin
110126,Quilcas,Huancayo,Junin
110127,San Agustin,Huancayo,Junin
110128,San Jeronimo de Tunan,Huancayo,Junin
110131,Santo Domingo de Acobamba,Huancayo,Junin
110132,Saño,Huancayo,Junin
110133,Sapallanga,Huancayo,Junin
110134,Sicaya,Huancayo,Junin
110136,Viques,Huancayo,Junin
110201,Concepcion,Concepcion,Junin
110202,Aco,Concepcion,Junin
110203,Andamarca,Concepcion,Junin
110204,Comas,Concepcion,Junin
110205,Cochas,Concepcion,Junin
110206,Chambara,Concepcion,Junin
110207,Heroinas Toledo,Concepcion,Junin
110208,Manzanares,Concepcion,Junin
110209,Mariscal Castilla,Concepcion,Junin
110210,Matahuasi,Concepcion,Junin
110211,Mito,Concepcion,Junin
110212,Nueve de Julio,Concepcion,Junin
110213,Orcotuna,Concepcion,Junin
110214,Santa Rosa de Ocopa,Concepcion,Junin
110215,San Jose de Quero,Concepcion,Junin
110301,Jauja,Jauja,Junin
110302,Acolla,Jauja,Junin
110303,Apata,Jauja,Junin
110304,Ataura,Jauja,Junin
110305,Canchayllo,Jauja,Junin
110306,El Mantaro,Jauja,Junin
110307,Huamali,Jauja,Junin
110308,Huaripampa,Jauja,Junin
110309,Huertas,Jauja,Junin
110310,Janjaillo,Jauja,Junin
110311,Julcan,Jauja,Junin
110312,Leonor Ordoñez,Jauja,Junin
110313,Llocllapampa,Jauja,Junin
110314,Marco,Jauja,Junin
110315,Masma,Jauja,Junin
110316,Molinos,Jauja,Junin
110317,Monobamba,Jauja,Junin
110318,Muqui,Jauja,Junin
110319,Muquiyauyo,Jauja,Junin
110320,Paca,Jauja,Junin
110321,Paccha,Jauja,Junin
110322,Pancan,Jauja,Junin
110323,Parco,Jauja,Junin
110324,Pomacancha,Jauja,Junin
110325,Ricran,Jauja,Junin
110326,San Lorenzo,Jauja,Junin
110327,San Pedro de Chunan,Jauja,Junin
110328,Sincos,Jauja,Junin
110329,Tunan Marca,Jauja,Junin
110330,Yauli,Jauja,Junin
110331,Curicaca,Jauja,Junin
110332,Masma Chicche,Jauja,Junin
110333,Sausa,Jauja,Junin
110334,Yauyos,Jauja,Junin
110401,Junin,Junin,Junin
110402,Carhuamayo,Junin,Junin
110403,Ondores,Junin,Junin
110404,Ulcumayo,Junin,Junin
110501,Tarma,Tarma,Junin
110502,Acobamba,Tarma,Junin
110503,Huaricolca,Tarma,Junin
110504,Huasahuasi,Tarma,Junin
110505,La Union,Tarma,Junin
110506,Palca,Tarma,Junin
110507,Palcamayo,Tarma,Junin
110508,San Pedro de Cajas,Tarma,Junin
110509,Tapo,Tarma,Junin
110601,La Oroya,Yauli,Junin
110602,Chacapalpa,Yauli,Junin
110603,Huay-Huay,Yauli,Junin
110604,Marcapomacocha,Yauli,Junin
110605,Morococha,Yauli,Junin
110606,Paccha,Yauli,Junin
110607,Santa Barbara de Carhuacayan,Yauli,Junin
110608,Suitucancha,Yauli,Junin
110609,Yauli,Yauli,Junin
110610,Santa Rosa de Sacco,Yauli,Junin
110701,Satipo,Satipo,Junin
110702,Coviriali,Satipo,Junin
110703,Llaylla,Satipo,Junin
110704,Mazamari,Satipo,Junin
110705,Pampa Hermosa,Satipo,Junin
110706,Pangoa,Satipo,Junin
110707,Rio Negro,Satipo,Junin
110708,Rio Tambo,Satipo,Junin
110801,Chanchamayo,Chanchamayo,Junin
110802,San Ramon,Chanchamayo,Junin
110803,Vitoc,Chanchamayo,Junin
110804,San Luis de Shuaro,Chanchamayo,Junin
110805,Pichanaqui,Chanchamayo,Junin
110806,Perene,Chanchamayo,Junin
110901,Chupaca,Chupaca,Junin
110902,Ahuac,Chupaca,Junin
110903,Chongos Bajo,Chupaca,Junin
110904,Huachac,Chupaca,Junin
110905,Huamancaca Chico,Chupaca,Junin
110906,San Juan de Yscos,Chupaca,Junin
110907,San Juan de Jarpa,Chupaca,Junin
110908,Tres de Diciembre,Chupaca,Junin
110909,Yanacancha,Chupaca,Junin
120101,Trujillo,Trujillo,La Libertad
120102,Huanchaco,Trujillo,La Libertad
120103,Laredo,Trujillo,La Libertad
120104,Moche,Trujillo,La Libertad
120105,Salaverry,Trujillo,La Libertad
120106,Simbal,Trujillo,La Libertad
120107,Victor Larco Herrera,Trujillo,La Libertad
120109,Poroto,Trujillo,La Libertad
120110,El Porvenir,Trujillo,La Libertad
120111,La Esperanza,Trujillo,La Libertad
120112,Florencia de Mora,Trujillo,La Libertad
120201,Bolivar,Bolivar,La Libertad
120202,Bambamarca,Bolivar,La Libertad
120203,Condormarca,Bolivar,La Libertad
120204,Longotea,Bolivar,La Libertad
120205,Ucuncha,Bolivar,La Libertad
120206,Uchumarca,Bolivar,La Libertad
120301,Huamachuco,Sanchez Carrion,La Libertad
120302,Cochorco,Sanchez Carrion,La Libertad
120303,Curgos,Sanchez Carrion,La Libertad
120304,Chugay,Sanchez Carrion,La Libertad
120305,Marcabal,Sanchez Carrion,La Libertad
120306,Sanagoran,Sanchez Carrion,La Libertad
120307,Sarin,Sanchez Carrion,La Libertad
120308,Sartimbamba,Sanchez Carrion,La Libertad
120401,Otuzco,Otuzco,La Libertad
120402,Agallpampa,Otuzco,La Libertad
120403,Charat,Otuzco,La Libertad
120404,Huaranchal,Otuzco,La Libertad
120405,La Cuesta,Otuzco,La Libertad
120408,Paranday,Otuzco,La Libertad
120409,Salpo,Otuzco,La Libertad
120410,Sinsicap,Otuzco,La Libertad
120411,Usquil,Otuzco,La Libertad
120413,Mache,Otuzco,La Libertad
120501,San Pedro de Lloc,Pacasmayo,La Libertad
120503,Guadalupe,Pacasmayo,La Libertad
120504,Jequetepeque,Pacasmayo,La Libertad
120506,Pacasmayo,Pacasmayo,La Libertad
120508,San Jose,Pacasmayo,La Libertad
120601,Tayabamba,Pataz,La Libertad
120602,Buldibuyo,Pataz,La Libertad
120603,Chillia,Pataz,La Libertad
120604,Huaylillas,Pataz,La Libertad
120605,Huancaspata,Pataz,La Libertad
120606,Huayo,Pataz,La Libertad
120607,Ongon,Pataz,La Libertad
120608,Parcoy,Pataz,La Libertad
120609,Pataz,Pataz,La Libertad
120610,Pias,Pataz,La Libertad
120611,Taurija,Pataz,La Libertad
120612,Urpay,Pataz,La Libertad
120613,Santiago de Challas,Pataz,La Libertad
120701,Santiago de Chuco,Santiago de Chuco,La Libertad
120702,Cachicadan,Santiago de Chuco,La Libertad
120703,Mollebamba,Santiago de Chuco,La Libertad
120704,Mollepata,Santiago de Chuco,La Libertad
120705,Quiruvilca,Santiago de Chuco,La Libertad
120706,Santa Cruz de Chuca,Santiago de Chuco,La Libertad
120707,Sitabamba,Santiago de Chuco,La Libertad
120708,Angasmarca,Santiago de Chuco,La Libertad
120801,Ascope,Ascope,La Libertad
120802,Chicama,Ascope,La Libertad
120803,Chocope,Ascope,La Libertad
120804,Santiago de Cao,Ascope,La Libertad
120805,Magdalena de Cao,Ascope,La Libertad
120806,Paijan,Ascope,La Libertad
120807,Razuri,Ascope,La Libertad
120808,Casa Grande,Ascope,La Libertad
120901,Chepen,Chepen,La Libertad
120902,Pacanga,Chepen,La Libertad
120903,Pueblo Nuevo,Chepen,La Libertad
121001,Julcan,Julcan,La Libertad
121002,Carabamba,Julcan,La Libertad
121003,Calamarca,Julcan,La Libertad
121004,Huaso,Julcan,La Libertad
121101,Cascas,Gran Chimu,La Libertad
121102,Lucma,Gran Chimu,La Libertad
121103,Marmot,Gran Chimu,La Libertad
121104,Sayapullo,Gran Chimu,La Libertad
121201,Viru,Viru,La Libertad
121202,Chao,Viru,La Libertad
121203,Guadalupito,Viru,La Libertad
130101,Chiclayo,Chiclayo,Lambayeque
130102,Chongoyape,Chiclayo,Lambayeque
130103,Eten,Chiclayo,Lambayeque
130104,Eten Puerto,Chiclayo,Lambayeque
130105,Lagunas,Chiclayo,Lambayeque
130106,Monsefu,Chiclayo,Lambayeque
130107,Nueva Arica,Chiclayo,Lambayeque
130108,Oyotun,Chiclayo,Lambayeque
130109,Picsi,Chiclayo,Lambayeque
130110,Pimentel,Chiclayo,Lambayeque
130111,Reque,Chiclayo,Lambayeque
130112,Jose Leonardo Ortiz,Chiclayo,Lambayeque
130113,Santa Rosa,Chiclayo,Lambayeque
130114,Saña,Chiclayo,Lambayeque
130115,La Victoria,Chiclayo,Lambayeque
130116,Cayalti,Chiclayo,Lambayeque
130117,Patapo,Chiclayo,Lambayeque
130118,Pomalca,Chiclayo,Lambayeque
130119,Pucala,Chiclayo,Lambayeque
130120,Tuman,Chiclayo,Lambayeque
130201,Ferreñafe,Ferreñafe,Lambayeque
130202,Incahuasi,Ferreñafe,Lambayeque
130203,Cañaris,Ferreñafe,Lambayeque
130204,Pitipo,Ferreñafe,Lambayeque
130205,Pueblo Nuevo,Ferreñafe,Lambayeque
130206,Manuel Antonio Mesones Muro,Ferreñafe,Lambayeque
130301,Lambayeque,Lambayeque,Lambayeque
130302,Chochope,Lambayeque,Lambayeque
130303,Illimo,Lambayeque,Lambayeque
130304,Jayanca,Lambayeque,Lambayeque
130305,Mochumi,Lambayeque,Lambayeque
130306,Morrope,Lambayeque,Lambayeque
130307,Motupe,Lambayeque,Lambayeque
130308,Olmos,Lambayeque,Lambayeque
130309,Pacora,Lambayeque,Lambayeque
130310,Salas,Lambayeque,Lambayeque
130311,San Jose,Lambayeque,Lambayeque
130312,Tucume,Lambayeque,Lambayeque
140101,Lima,Lima,Lima
140102,Ancon,Lima,Lima
140103,Ate,Lima,Lima
140104,Breña,Lima,Lima
140105,Carabayllo,Lima,Lima
140106,Comas,Lima,Lima
140107,Chaclacayo,Lima,Lima
140108,Chorrillos,Lima,Lima
140109,La Victoria,Lima,Lima
140110,La Molina,Lima,Lima
140111,Lince,Lima,Lima
140112,Lurigancho,Lima,Lima
140113,Lurin,Lima,Lima
140114,Magdalena del Mar,Lima,Lima
140115,Miraflores,Lima,Lima
140116,Pachacamac,Lima,Lima
140117,Pueblo Libre,Lima,Lima
140118,Pucusana,Lima,Lima
140119,Puente Piedra,Lima,Lima
140120,Punta Hermosa,Lima,Lima
140121,Punta Negra,Lima,Lima
140122,Rimac,Lima,Lima
140123,San Bartolo,Lima,Lima
140124,San Isidro,Lima,Lima
140125,Barranco,Lima,Lima
140126,San Martin de Porres,Lima,Lima
140127,San Miguel,Lima,Lima
140128,Santa Maria del Mar,Lima,Lima
140129,Santa Rosa,Lima,Lima
140130,Santiago de Surco,Lima,Lima
140131,Surquillo,Lima,Lima
140132,Villa Maria del Triunfo,Lima,Lima
140133,Jesus Maria,Lima,Lima
140134,Independencia,Lima,Lima
140135,El Agustino,Lima,Lima
140136,San Juan de Miraflores,Lima,Lima
140137,San Juan de Lurigancho,Lima,Lima
140138,San Luis,Lima,Lima
140139,Cieneguilla,Lima,Lima
140140,San Borja,Lima,Lima
140141,Villa El Salvador,Lima,Lima
140142,Los Olivos,Lima,Lima
140143,Santa Anita,Lima,Lima
140201,Cajatambo,Cajatambo,Lima
140205,Copa,Cajatambo,Lima
140206,Gorgor,Cajatambo,Lima
140207,Huancapon,Cajatambo,Lima
140208,Manas,Cajatambo,Lima
140301,Canta,Canta,Lima
140302,Arahuay,Canta,Lima
140303,Huamantanga,Canta,Lima
140304,Huaros,Canta,Lima
140305,Lachaqui,Canta,Lima
140306,San Buenaventura,Canta,Lima
140307,Santa Rosa de Quives,Canta,Lima
140401,San Vicente de Cañete,Cañete,Lima
140402,Calango,Cañete,Lima
140403,Cerro Azul,Cañete,Lima
140404,Coayllo,Cañete,Lima
140405,Chilca,Cañete,Lima
140406,Imperial,Cañete,Lima
140407,Lunahuana,Cañete,Lima
140408,Mala,Cañete,Lima
140409,Nuevo Imperial,Cañete,Lima
140410,Pacaran,Cañete,Lima
140411,Quilmana,Cañete,Lima
140412,San Antonio,Cañete,Lima
140413,San Luis,Cañete,Lima
140414,Santa Cruz de Flores,Cañete,Lima
140415,Zuñiga,Cañete,Lima
140416,Asia,Cañete,Lima
140501,Huacho,Huaura,Lima
140502,Ambar,Huaura,Lima
140504,Caleta de Carquin,Huaura,Lima
140505,Checras,Huaura,Lima
140506,Hualmay,Huaura,Lima
140507,Huaura,Huaura,Lima
140508,Leoncio Prado,Huaura,Lima
140509,Paccho,Huaura,Lima
140511,Santa Leonor,Huaura,Lima
140512,Santa Maria,Huaura,Lima
140513,Sayan,Huaura,Lima
140516,Vegueta,Huaura,Lima
140601,Matucana,Huarochiri,Lima
140602,Antioquia,Huarochiri,Lima
140603,Callahuanca,Huarochiri,Lima
140604,Carampoma,Huarochiri,Lima
140605,San Pedro de Casta,Huarochiri,Lima
140606,Cuenca,Huarochiri,Lima
140607,Chicla,Huarochiri,Lima
140608,Huanza,Huarochiri,Lima
140609,Huarochiri,Huarochiri,Lima
140610,Lahuaytambo,Huarochiri,Lima
140611,Langa,Huarochiri,Lima
140612,Mariatana,Huarochiri,Lima
140613,Ricardo Palma,Huarochiri,Lima
140614,San Andres de Tupicocha,Huarochiri,Lima
140615,San Antonio,Huarochiri,Lima
140616,San Bartolome,Huarochiri,Lima
140617,San Damian,Huarochiri,Lima
140618,Sangallaya,Huarochiri,Lima
140619,San Juan de Tantaranche,Huarochiri,Lima
140620,San Lorenzo de Quinti,Huarochiri,Lima
140621,San Mateo,Huarochiri,Lima
140622,San Mateo de Otao,Huarochiri,Lima
140623,San Pedro de Huancayre,Huarochiri,Lima
140624,Santa Cruz de Cocachacra,Huarochiri,Lima
140625,Santa Eulalia,Huarochiri,Lima
140626,Santiago de Anchucaya,Huarochiri,Lima
140627,Santiago de Tuna,Huarochiri,Lima
140628,Santo Domingo de los Olleros,Huarochiri,Lima
140629,Surco,Huarochiri,Lima
140630,Huachupampa,Huarochiri,Lima
140631,Laraos,Huarochiri,Lima
140632,San Juan de Iris,Huarochiri,Lima
140701,Yauyos,Yauyos,Lima
140702,Alis,Yauyos,Lima
140703,Ayauca,Yauyos,Lima
140704,Ayaviri,Yauyos,Lima
140705,Azangaro,Yauyos,Lima
140706,Cacra,Yauyos,Lima
140707,Carania,Yauyos,Lima
140708,Cochas,Yauyos,Lima
140709,Colonia,Yauyos,Lima
140710,Chocos,Yauyos,Lima
140711,Huampara,Yauyos,Lima
140712,Huancaya,Yauyos,Lima
140713,Huangascar,Yauyos,Lima
140714,Huantan,Yauyos,Lima
140715,Huañec,Yauyos,Lima
140716,Laraos,Yauyos,Lima
140717,Lincha,Yauyos,Lima
140718,Miraflores,Yauyos,Lima
140719,Omas,Yauyos,Lima
140720,Quinches,Yauyos,Lima
140721,Quinocay,Yauyos,Lima
140722,San Joaquin,Yauyos,Lima
140723,San Pedro de Pilas,Yauyos,Lima
140724,Tanta,Yauyos,Lima
140725,Tauripampa,Yauyos,Lima
140726,Tupe,Yauyos,Lima
140727,Tomas,Yauyos,Lima
140728,Viñac,Yauyos,Lima
140729,Vitis,Yauyos,Lima
140730,Hongos,Yauyos,Lima
140731,Madean,Yauyos,Lima
140732,Putinza,Yauyos,Lima
140733,Catahuasi,Yauyos,Lima
140801,Huaral,Huaral,Lima
140802,Atavillos Alto,Huaral,Lima
140803,Atavillos Bajo,Huaral,Lima
140804,Aucallama,Huaral,Lima
140805,Chancay,Huaral,Lima
140806,Ihuari,Huaral,Lima
140807,Lampian,Huaral,Lima
140808,Pacaraos,Huaral,Lima
140809,San Miguel de Acos,Huaral,Lima
140810,Veintisiete de Noviembre,Huaral,Lima
140811,Santa Cruz de Andamarca,Huaral,Lima
140812,Sumbilca,Huaral,Lima
140901,Barranca,Barranca,Lima
140902,Paramonga,Barranca,Lima
140903,Pativilca,Barranca,Lima
140904,Supe,Barranca,Lima
140905,Supe Puerto,Barranca,Lima
141001,Oyon,Oyon,Lima
141002,Navan,Oyon,Lima
141003,Caujul,Oyon,Lima
141004,Andajes,Oyon,Lima
141005,Pachangara,Oyon,Lima
141006,Cochamarca,Oyon,Lima
150101,Iquitos,Maynas,Loreto
150102,Alto Nanay,Maynas,Loreto
150103,Fernando Lores,Maynas,Loreto
150104,Las Amazonas,Maynas,Loreto
150105,Mazan,Maynas,Loreto
150106,Napo,Maynas,Loreto
150107,Putumayo,Maynas,Loreto
150108,Torres Causana,Maynas,Loreto
150110,Indiana,Maynas,Loreto
150111,Punchana,Maynas,Loreto
150112,Belen,Maynas,Loreto
150113,San Juan Bautista,Maynas,Loreto
150114,Teniente Manuel Clavero,Maynas,Loreto
150201,Yurimaguas,Alto Amazonas,Loreto
150202,Balsapuerto,Alto Amazonas,Loreto
150205,Jeberos,Alto Amazonas,Loreto
150206,Lagunas,Alto Amazonas,Loreto
150210,Santa Cruz,Alto Amazonas,Loreto
150211,Teniente Cesar Lopez Rojas,Alto Amazonas,Loreto
150301,Nauta,Loreto,Loreto
150302,Parinari,Loreto,Loreto
150303,Tigre,Loreto,Loreto
150304,Urarinas,Loreto,Loreto
150305,Trompeteros,Loreto,Loreto
150401,Requena,Requena,Loreto
150402,Alto Tapiche,Requena,Loreto
150403,Capelo,Requena,Loreto
150404,Emilio San Martin,Requena,Loreto
150405,Maquia,Requena,Loreto
150406,Puinahua,Requena,Loreto
150407,Saquena,Requena,Loreto
150408,Soplin,Requena,Loreto
150409,Tapiche,Requena,Loreto
150410,Jenaro Herrera,Requena,Loreto
150411,Yaquerana,Requena,Loreto
150501,Contamana,Ucayali,Loreto
150502,Vargas Guerra,Ucayali,Loreto
150503,Padre Marquez,Ucayali,Loreto
150504,Pampa Hermosa,Ucayali,Loreto
150505,Sarayacu,Ucayali,Loreto
150506,Inahuaya,Ucayali,Loreto
150601,Ramon Castilla,Mariscal Ramon Castilla,Loreto
150602,Pebas,Mariscal Ramon Castilla,Loreto
150603,Yavari,Mariscal Ramon Castilla,Loreto
150604,San Pablo,Mariscal Ramon Castilla,Loreto
150701,Barranca,Datem del Marañon,Loreto
150702,Andoas,Datem del Marañon,Loreto
150703,Cahuapanas,Datem del Marañon,Loreto
150704,Manseriche,Datem del Marañon,Loreto
150705,Morona,Datem del Marañon,Loreto
150706,Pastaza,Datem del Marañon,Loreto
160101,Tambopata,Tambopata,Madre de Dios
160102,Inambari,Tambopata,Madre de Dios
160103,Las Piedras,Tambopata,Madre de Dios
160104,Laberinto,Tambopata,Madre de Dios
160201,Manu,Manu,Madre de Dios
160202,Fitzcarrald,Manu,Madre de Dios
160203,Madre de Dios,Manu,Madre de Dios
160204,Huepetuhe,Manu,Madre de Dios
160301,Iñapari,Tahuamanu,Madre de Dios
160302,Iberia,Tahuamanu,Madre de Dios
160303,Tahuamanu,Tahuamanu,Madre de Dios
170101,Moquegua,Mariscal Nieto,Moquegua
170102,Carumas,Mariscal Nieto,Moquegua
170103,Cuchumbaya,Mariscal Nieto,Moquegua
170104,San Cristobal,Mariscal Nieto,Moquegua
170105,Torata,Mariscal Nieto,Moquegua
170106,Samegua,Mariscal Nieto,Moquegua
170201,Omate,General Sanchez Cerro,Moquegua
170202,Coalaque,General Sanchez Cerro,Moquegua
170203,Chojata,General Sanchez Cerro,Moquegua
170204,Ichuña,General Sanchez Cerro,Moquegua
170205,La Capilla,General Sanchez Cerro,Moquegua
170206,Lloque,General Sanchez Cerro,Moquegua
170207,Matalaque,General Sanchez Cerro,Moquegua
170208,Puquina,General Sanchez Cerro,Moquegua
170209,Quinistaquillas,General Sanchez Cerro,Moquegua
170210,Ubinas,General Sanchez Cerro,Moquegua
170211,Yunga,General Sanchez Cerro,Moquegua
170301,Ilo,Ilo,Moquegua
170302,El Algarrobal,Ilo,Moquegua
170303,Pacocha,Ilo,Moquegua
180101,Chaupimarca,Pasco,Pasco
180103,Huachon,Pasco,Pasco
180104,Huariaca,Pasco,Pasco
180105,Huayllay,Pasco,Pasco
180106,Ninacaca,Pasco,Pasco
180107,Pallanchacra,Pasco,Pasco
180108,Paucartambo,Pasco,Pasco
180109,San Francisco de Asis de Yarusyacan,Pasco,Pasco
180110,Simon Bolivar,Pasco,Pasco
180111,Ticlacayan,Pasco,Pasco
180112,Tinyahuarco,Pasco,Pasco
180113,Vicco,Pasco,Pasco
180114,Yanacancha,Pasco,Pasco
180201,Yanahuanca,Daniel Alcides Carrion,Pasco
180202,Chacayan,Daniel Alcides Carrion,Pasco
180203,Goyllarisquizga,Daniel Alcides Carrion,Pasco
180204,Paucar,Daniel Alcides Carrion,Pasco
180205,San Pedro de Pillao,Daniel Alcides Carrion,Pasco
180206,Santa Ana de Tusi,Daniel Alcides Carrion,Pasco
180207,Tapuc,Daniel Alcides Carrion,Pasco
180208,Vilcabamba,Daniel Alcides Carrion,Pasco
180301,Oxapampa,Oxapampa,Pasco
180302,Chontabamba,Oxapampa,Pasco
180303,Huancabamba,Oxapampa,Pasco
180304,Puerto Bermudez,Oxapampa,Pasco
180305,Villa Rica,Oxapampa,Pasco
180306,Pozuzo,Oxapampa,Pasco
180307,Palcazu,Oxapampa,Pasco
180308,Constitución,Oxapampa,Pasco
190101,Piura,Piura,Piura
190103,Castilla,Piura,Piura
190104,Catacaos,Piura,Piura
190105,La Arena,Piura,Piura
190106,La Union,Piura,Piura
190107,Las Lomas,Piura,Piura
190109,Tambo Grande,Piura,Piura
190113,Cura Mori,Piura,Piura
190114,El Tallan,Piura,Piura
190201,Ayabaca,Ayabaca,Piura
190202,Frias,Ayabaca,Piura
190203,Lagunas,Ayabaca,Piura
190204,Montero,Ayabaca,Piura
190205,Pacaipampa,Ayabaca,Piura
190206,Sapillica,Ayabaca,Piura
190207,Sicchez,Ayabaca,Piura
190208,Suyo,Ayabaca,Piura
190209,Jilili,Ayabaca,Piura
190210,Paimas,Ayabaca,Piura
190301,Huancabamba,Huancabamba,Piura
190302,Canchaque,Huancabamba,Piura
190303,Huarmaca,Huancabamba,Piura
190304,Sondor,Huancabamba,Piura
190305,Sondorillo,Huancabamba,Piura
190306,El Carmen de La Frontera,Huancabamba,Piura
190307,San Miguel de El Faique,Huancabamba,Piura
190308,Lalaquiz,Huancabamba,Piura
190401,Chulucanas,Morropon,Piura
190402,Buenos Aires,Morropon,Piura
190403,Chalaco,Morropon,Piura
190404,Morropon,Morropon,Piura
190405,Salitral,Morropon,Piura
190406,Santa Catalina de Mossa,Morropon,Piura
190407,Santo Domingo,Morropon,Piura
190408,La Matanza,Morropon,Piura
190409,Yamango,Morropon,Piura
190410,San Juan de Bigote,Morropon,Piura
190501,Paita,Paita,Piura
190502,Amotape,Paita,Piura
190503,Arenal,Paita,Piura
190504,La Huaca,Paita,Piura
190505,Colan,Paita,Piura
190506,Tamarindo,Paita,Piura
190507,Vichayal,Paita,Piura
190601,Sullana,Sullana,Piura
190602,Bellavista,Sullana,Piura
190603,Lancones,Sullana,Piura
190604,Marcavelica,Sullana,Piura
190605,Miguel Checa,Sullana,Piura
190606,Querecotillo,Sullana,Piura
190607,Salitral,Sullana,Piura
190608,Ignacio Escudero,Sullana,Piura
190701,Pariñas,Talara,Piura
190702,El Alto,Talara,Piura
190703,La Brea,Talara,Piura
190704,Lobitos,Talara,Piura
190705,Mancora,Talara,Piura
190706,Los Organos,Talara,Piura
190801,Sechura,Sechura,Piura
190802,Vice,Sechura,Piura
190803,Bernal,Sechura,Piura
190804,Bellavista de La Union,Sechura,Piura
190805,Cristo Nos Valga,Sechura,Piura
190806,Rinconada Llicuar,Sechura,Piura
200101,Puno,Puno,Puno
200102,Acora,Puno,Puno
200103,Atuncolla,Puno,Puno
200104,Capachica,Puno,Puno
200105,Coata,Puno,Puno
200106,Chucuito,Puno,Puno
200107,Huata,Puno,Puno
200108,Mañazo,Puno,Puno
200109,Paucarcolla,Puno,Puno
200110,Pichacani,Puno,Puno
200111,San Antonio,Puno,Puno
200112,Tiquillaca,Puno,Puno
200113,Vilque,Puno,Puno
200114,Plateria,Puno,Puno
200115,Amantani,Puno,Puno
200201,Azangaro,Azangaro,Puno
200202,Achaya,Azangaro,Puno
200203,Arapa,Azangaro,Puno
200204,Asillo,Azangaro,Puno
200205,Caminaca,Azangaro,Puno
200206,Chupa,Azangaro,Puno
200207,Jose Domingo Choquehuanca,Azangaro,Puno
200208,Muñani,Azangaro,Puno
200210,Potoni,Azangaro,Puno
200212,Saman,Azangaro,Puno
200213,San Anton,Azangaro,Puno
200214,San Jose,Azangaro,Puno
200215,San Juan de Salinas,Azangaro,Puno
200216,Santiago de Pupuja,Azangaro,Puno
200217,Tirapata,Azangaro,Puno
200301,Macusani,Carabaya,Puno
200302,Ajoyani,Carabaya,Puno
200303,Ayapata,Carabaya,Puno
200304,Coasa,Carabaya,Puno
200305,Corani,Carabaya,Puno
200306,Crucero,Carabaya,Puno
200307,Ituata,Carabaya,Puno
200308,Ollachea,Carabaya,Puno
200309,San Gaban,Carabaya,Puno
200310,Usicayos,Carabaya,Puno
200401,Juli,Chucuito,Puno
200402,Desaguadero,Chucuito,Puno
200403,Huacullani,Chucuito,Puno
200406,Pisacoma,Chucuito,Puno
200407,Pomata,Chucuito,Puno
200410,Zepita,Chucuito,Puno
200412,Kelluyo,Chucuito,Puno
200501,Huancane,Huancane,Puno
200502,Cojata,Huancane,Puno
200504,Inchupalla,Huancane,Puno
200506,Pusi,Huancane,Puno
200507,Rosaspata,Huancane,Puno
200508,Taraco,Huancane,Puno
200509,Vilque Chico,Huancane,Puno
200511,Huatasani,Huancane,Puno
200601,Lampa,Lampa,Puno
200602,Cabanilla,Lampa,Puno
200603,Calapuja,Lampa,Puno
200604,Nicasio,Lampa,Puno
200605,Ocuviri,Lampa,Puno
200606,Palca,Lampa,Puno
200607,Paratia,Lampa,Puno
200608,Pucara,Lampa,Puno
200609,Santa Lucia,Lampa,Puno
200610,Vilavila,Lampa,Puno
200701,Ayaviri,Melgar,Puno
200702,Antauta,Melgar,Puno
200703,Cupi,Melgar,Puno
200704,Llalli,Melgar,Puno
200705,Macari,Melgar,Puno
200706,Nuñoa,Melgar,Puno
200707,Orurillo,Melgar,Puno
200708,Santa Rosa,Melgar,Puno
200709,Umachiri,Melgar,Puno
200801,Sandia,Sandia,Puno
200803,Cuyocuyo,Sandia,Puno
200804,Limbani,Sandia,Puno
200805,Phara,Sandia,Puno
200806,Patambuco,Sandia,Puno
200807,Quiaca,Sandia,Puno
200808,San Juan del Oro,Sandia,Puno
200810,Yanahuaya,Sandia,Puno
200811,Alto Inambari,Sandia,Puno
200812,San Pedro de Putina Punco,Sandia,Puno
200901,Juliaca,San Roman,Puno
200902,Cabana,San Roman,Puno
200903,Cabanillas,San Roman,Puno
200904,Caracoto,San Roman,Puno
201001,Yunguyo,Yunguyo,Puno
201002,Unicachi,Yunguyo,Puno
201003,Anapia,Yunguyo,Puno
201004,Copani,Yunguyo,Puno
201005,Cuturapi,Yunguyo,Puno
201006,Ollaraya,Yunguyo,Puno
201007,Tinicachi,Yunguyo,Puno
201101,Putina,San Antonio de Putina,Puno
201102,Pedro Vilca Apaza,San Antonio de Putina,Puno
201103,Quilcapuncu,San Antonio de Putina,Puno
201104,Ananea,San Antonio de Putina,Puno
201105,Sina,San Antonio de Putina,Puno
201201,Ilave,El Collao,Puno
201202,Pilcuyo,El Collao,Puno
201203,Santa Rosa,El Collao,Puno
201204,Capazo,El Collao,Puno
201205,Conduriri,El Collao,Puno
201301,Moho,Moho,Puno
201302,Conima,Moho,Puno
201303,Tilali,Moho,Puno
201304,Huayrapata,Moho,Puno
210101,Moyobamba,Moyobamba,San Martin
210102,Calzada,Moyobamba,San Martin
210103,Habana,Moyobamba,San Martin
210104,Jepelacio,Moyobamba,San Martin
210105,Soritor,Moyobamba,San Martin
210106,Yantalo,Moyobamba,San Martin
210201,Saposoa,Huallaga,San Martin
210202,Piscoyacu,Huallaga,San Martin
210203,Sacanche,Huallaga,San Martin
210204,Tingo de Saposoa,Huallaga,San Martin
210205,Alto Saposoa,Huallaga,San Martin
210206,El Eslabon,Huallaga,San Martin
210301,Lamas,Lamas,San Martin
210303,Barranquita,Lamas,San Martin
210304,Caynarachi,Lamas,San Martin
210305,Cuñumbuqui,Lamas,San Martin
210306,Pinto Recodo,Lamas,San Martin
210307,Rumisapa,Lamas,San Martin
210311,Shanao,Lamas,San Martin
210313,Tabalosos,Lamas,San Martin
210314,Zapatero,Lamas,San Martin
210315,Alonso de Alvarado,Lamas,San Martin
210316,San Roque de Cumbaza,Lamas,San Martin
210401,Juanjui,Mariscal Caceres,San Martin
210402,Campanilla,Mariscal Caceres,San Martin
210403,Huicungo,Mariscal Caceres,San Martin
210404,Pachiza,Mariscal Caceres,San Martin
210405,Pajarillo,Mariscal Caceres,San Martin
210501,Rioja,Rioja,San Martin
210502,Posic,Rioja,San Martin
210503,Yorongos,Rioja,San Martin
210504,Yuracyacu,Rioja,San Martin
210505,Nueva Cajamarca,Rioja,San Martin
210506,Elias Soplin Vargas,Rioja,San Martin
210507,San Fernando,Rioja,San Martin
210508,Pardo Miguel,Rioja,San Martin
210509,Awajun,Rioja,San Martin
210601,Tarapoto,San Martin,San Martin
210602,Alberto Leveau,San Martin,San Martin
210604,Cacatachi,San Martin,San Martin
210606,Chazuta,San Martin,San Martin
210607,Chipurana,San Martin,San Martin
210608,El Porvenir,San Martin,San Martin
210609,Huimbayoc,San Martin,San Martin
210610,Juan Guerra,San Martin,San Martin
210611,Morales,San Martin,San Martin
210612,Papaplaya,San Martin,San Martin
210616,San Antonio,San Martin,San Martin
210619,Sauce,San Martin,San Martin
210620,Shapaja,San Martin,San Martin
210621,La Banda de Shilcayo,San Martin,San Martin
210701,Bellavista,Bellavista,San Martin
210702,San Rafael,Bellavista,San Martin
210703,San Pablo,Bellavista,San Martin
210704,Alto Biavo,Bellavista,San Martin
210705,Huallaga,Bellavista,San Martin
210706,Bajo Biavo,Bellavista,San Martin
210801,Tocache,Tocache,San Martin
210802,Nuevo Progreso,Tocache,San Martin
210803,Polvora,Tocache,San Martin
210804,Shunte,Tocache,San Martin
210805,Uchiza,Tocache,San Martin
210901,Picota,Picota,San Martin
210902,Buenos Aires,Picota,San Martin
210903,Caspisapa,Picota,San Martin
210904,Pilluana,Picota,San Martin
210905,Pucacaca,Picota,San Martin
210906,San Cristobal,Picota,San Martin
210907,San Hilarion,Picota,San Martin
210908,Tingo de Ponasa,Picota,San Martin
210909,Tres Unidos,Picota,San Martin
210910,Shamboyacu,Picota,San Martin
211001,San Jose de Sisa,El Dorado,San Martin
211002,Agua Blanca,El Dorado,San Martin
211003,Shatoja,El Dorado,San Martin
211004,San Martin,El Dorado,San Martin
211005,Santa Rosa,El Dorado,San Martin
220101,Tacna,Tacna,Tacna
220102,Calana,Tacna,Tacna
220104,Inclan,Tacna,Tacna
220107,Pachia,Tacna,Tacna
220108,Palca,Tacna,Tacna
220109,Pocollay,Tacna,Tacna
220110,Sama,Tacna,Tacna
220111,Alto de La Alianza,Tacna,Tacna
220112,Ciudad Nueva,Tacna,Tacna
220113,Coronel Gregorio Albarracin Lanchipa,Tacna,Tacna
220201,Tarata,Tarata,Tacna
220205,Heroes Albarracin,Tarata,Tacna
220206,Estique,Tarata,Tacna
220207,Estique-Pampa,Tarata,Tacna
220210,Sitajara,Tarata,Tacna
220211,Susapaya,Tarata,Tacna
220212,Tarucachi,Tarata,Tacna
220213,Ticaco,Tarata,Tacna
220301,Locumba,Jorge Basadre,Tacna
220302,Ite,Jorge Basadre,Tacna
220303,Ilabaya,Jorge Basadre,Tacna
220401,Candarave,Candarave,Tacna
220402,Cairani,Candarave,Tacna
220403,Curibaya,Candarave,Tacna
220404,Huanuara,Candarave,Tacna
220405,Quilahuani,Candarave,Tacna
220406,Camilaca,Candarave,Tacna
230101,Tumbes,Tumbes,Tumbes
230102,Corrales,Tumbes,Tumbes
230103,La Cruz,Tumbes,Tumbes
230104,Pampas de Hospital,Tumbes,Tumbes
230105,San Jacinto,Tumbes,Tumbes
230106,San Juan de La Virgen,Tumbes,Tumbes
230201,Zorritos,Contralmirante Villar,Tumbes
230202,Casitas,Contralmirante Villar,Tumbes
230203,Canoas de Punta Sal,Contralmirante Villar,Tumbes
230301,Zarumilla,Zarumilla,Tumbes
230302,Matapalo,Zarumilla,Tumbes
230303,Papayal,Zarumilla,Tumbes
230304,Aguas Verdes,Zarumilla,Tumbes
240101,Callao,Callao,Callao
240102,Bellavista,Callao,Callao
240103,La Punta,Callao,Callao
240104,Carmen de La Legua,Callao,Callao
240105,La Perla,Callao,Callao
240106,Ventanilla,Callao,Callao
250101,Calleria,Coronel Portillo,Ucayali
250102,Yarinacocha,Coronel Portillo,Ucayali
250103,Masisea,Coronel Portillo,Ucayali
250104,Campoverde,Coronel Portillo,Ucayali
250105,Iparia,Coronel Portillo,Ucayali
250106,Nueva Requena,Coronel Portillo,Ucayali
250107,Manantay,Coronel Portillo,Ucayali
250201,Padre Abad,Padre Abad,Ucayali
250202,Irazola,Padre Abad,Ucayali
250203,Curimana,Padre Abad,Ucayali
250301,Raymondi,Atalaya,Ucayali
250302,Tahuania,Atalaya,Ucayali
250303,Yurua,Atalaya,Ucayali
250304,Sepahua,Atalaya,Ucayali
250401,Purus,Purus,Ucayali`;

function parseUbigeoCSV(csv) {
  const lines = csv.split("\n")
                   .map(line => line.trim())
                   .filter(line => line);
  const tree = {};
  // Se omite la primera línea (cabecera)
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(",");
    const code = cols[0];
    const distrito = cols[1];
    const provincia = cols[2];
    const departamento = cols[3];

    // Se extraen los códigos correspondientes
    const deptCode = code.substr(0, 2);
    const provCode = code.substr(2, 2);
    const distCode = code.substr(4, 2);

    // Si no existe el departamento, se crea
    if (!tree[deptCode]) {
      tree[deptCode] = {
        departamento: departamento,
        provincias: {}
      };
    }
    // Si no existe la provincia dentro del departamento, se crea
    if (!tree[deptCode].provincias[provCode]) {
      tree[deptCode].provincias[provCode] = {
        provincia: provincia,
        distritos: {}
      };
    }
    // Se asigna el distrito
    tree[deptCode].provincias[provCode].distritos[distCode] = distrito;
  }
  return tree;
}

const ubigeoData = parseUbigeoCSV(ubigeoCSV);

/***************************************
 * MUTUAL EXCLUSION RULES PARA SVA
 ***************************************/
const svaMutualExclusionRules = {
  fono: [
    ["fono_10", "fono_prov_hb"]
  ],
  mesh: [
    ["mesh_400", "mesh_600", "mesh_1000", "mesh_comodato_1", "mesh_comodato_2"],
    ["mesh_alquiler_15", "mesh_alquiler_20"]
  ],
  winbox: [
    ["winbox_15", "winbox_30"],
    ["winbox_plan_hb_1", "winbox_plan_hb_2"]
  ],
  wintv: [
    ["wintv_basico", "wintv_plus", "wintv_premium", "wintv_plus_hb", "wintv_plus_provincia", "wintv_plus_promo_efe", "wintv_l1_max", "wintv_l1_max_premium", "wintv_l1_max_premium_promo", "wintv_plus_playas"]
  ],
  winGames: [
    ["win_games_hb", "win_games"]
  ],
  dgo: [
    ["dgo_l1_max_hb", "dgo_l1_max_promo_efe", "dgo_full_l1_max", "dgo_full_l1_max_hb", "dgo_full_l1_max_promo"]
  ]
};
