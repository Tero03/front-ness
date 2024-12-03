<template>
  <el-card class="formBox">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="docFormat">
          <el-form
            label-position="left"
            label-width="auto"
            style="max-width: 600px"
            ref="formRef"
            :model="form"
            :rules="rules"
            :size="formSize"
            status-icon
          >
            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>
                  El ejercicio de pases cortos y largos está diseñado para evaluar la precisión y la capacidad de pase de los jugadores, tanto en distancias cortas como largas. Consiste en realizar pases hacia un compañero, alternando entre pases cortos y largos, mientras se busca precisión en la colocación del balón y la correcta recepción. Se recomienda realizar una breve activación, incluyendo estiramientos de los músculos de las piernas y un trote suave de 5 minutos antes de comenzar.
                </p>
              </el-alert>
              <el-form-item
                label="Introduzca el número de pases hechos:"
                prop="pasesCortosLargos"
                class="selecFormat"
              >
                <el-input
                  placeholder="0"
                  v-model="form.pasesCortosLargos.tiros"
                />
                <el-select
                  placeholder="¿Qué tan preciso fue?"
                  v-model="form.pasesCortosLargos.aciertos"
                  clearable
                >
                  <el-option label="Falle todos los pases" value="0" />
                  <el-option label="Acerte cerca del 25% de pases" value="25" />
                  <el-option label="Acerte la mitad de los pases" value="50" />
                  <el-option label="Acerte la gran mayoria de pases" value="85"/>
                  <el-option label="Acerte todos los pases" value="100" />
                </el-select>
              </el-form-item>
            </el-space>

              <el-space fill>
                <el-alert type="info" show-icon :closable="false">
                  <p>
                    El control y movimiento tiene como objetivo mejorar la capacidad del jugador para recibir el balón mientras se desplaza. Con un compañero que pase el balón, el jugador debe controlar y mover el balón de manera eficiente. Se recomienda realizar un trote previo de 5 minutos y estiramientos de tobillos, caderas y piernas para mejorar la agilidad y la flexibilidad, minimizando el riesgo de lesiones.
                  </p>
                </el-alert>
                <el-form-item
                  label="Introduzca el número de pases recibidos con éxito:"
                  prop="controlMovimiento"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.controlMovimiento.acierto"
                  />
                  <el-select v-model="form.controlMovimiento.dif" placeholder="¿Cuanto se le dificultó?" clearable>
                    <el-option
                    v-for="number in 5"
                    :key="number"
                    :label="`${number}`"
                    :value="number"
                    />
                  </el-select>
                </el-form-item>
              </el-space>

              <el-space fill>
                <el-alert type="info" show-icon :closable="false">
                  <p>
                    El ejercicio de control aéreo busca mejorar la capacidad del jugador para controlar el balón cuando este llega por el aire. El jugador, junto a un compañero, deberá recibir balones lanzados desde el aire utilizando diferentes partes del cuerpo (cabeza, pecho, muslos). Se recomienda realizar un calentamiento previo que incluya trote y estiramientos de piernas, caderas y rodillas, para mejorar el rango de movimiento y prevenir lesiones en las articulaciones.
                  </p>
                </el-alert>
                <el-form-item
                  label="Introduzca el número de controles éxitosos:"
                  prop="controlAereo"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.controlAereo.acierto"
                  />
                  <el-select v-model="form.controlAereo.dif" placeholder="¿Cuanto se le dificultó?" clearable>
                    <el-option
                    v-for="number in 5"
                    :key="number"
                    :label="`${number}`"
                    :value="number"
                    />
                  </el-select>
                </el-form-item>
              </el-space>

              <el-space fill>
                <el-alert type="info" show-icon :closable="false">
                  <p>
                    Este ejercicio de pases en movimiento tiene como objetivo evaluar la capacidad de un jugador para realizar pases precisos mientras se encuentra en movimiento. El jugador, acompañado de un compañero, debe desplazarse a lo largo del campo mientras pasa el balón. Se recomienda un trote previo de 5 minutos y estiramientos dinámicos de piernas y caderas para preparar el cuerpo para movimientos rápidos y evitar lesiones.
                  </p>
                </el-alert>
                <el-form-item
                  label="Introduzca los pases recibidos correctamente:"
                  prop="pasesMovimiento"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.pasesMovimiento.acierto"
                  />
                  <el-select
                  placeholder="¿Que tan preciso fue con sus intentos en total?"
                  v-model="form.pasesMovimiento.precision"
                  clearable
                >
                  <el-option label="No recibi ningun pase" value="0" />
                  <el-option label="Recibi cerca del 25% de pases" value="25" />
                  <el-option label="Recibi la mitad de pases" value="50" />
                  <el-option label="Recbi la gran mayoria de pases" value="85"/>
                  <el-option label="Recibi todos los pases" value="100" />
                </el-select>
                </el-form-item>
              </el-space>

              <el-space fill>
                <el-alert type="info" show-icon :closable="false">
                  <p>
                    Las recepciones bajo presión simulan situaciones reales de juego donde un jugador debe recibir el balón mientras es presionado por un oponente. En este ejercicio, un jugador pasa el balón mientras el otro se desplaza para interceptarlo y recibirlo correctamente, enfrentando la presión de un compañero. Se recomienda realizar un trote de 5 minutos y estiramientos en las piernas antes de comenzar, para asegurar una recepción adecuada y evitar lesiones por tensión muscular.
                  </p>
                </el-alert>
                <el-form-item
                  label="Introduzca el número de recepciones éxitosas:"
                  prop="recepcionPresion"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.recepcionPresion.acierto"
                  />
                  <el-select v-model="form.recepcionPresion.dif" placeholder="¿Cuanto se le dificultó?" clearable>
                    <el-option
                    v-for="number in 5"
                    :key="number"
                    :label="`${number}`"
                    :value="number"
                    />
                  </el-select>
                </el-form-item>
              </el-space>

              <el-space fill>
                <el-alert type="info" show-icon :closable="false">
                  <p>
                    El ejercicio de cabeceo a la puerta tiene como objetivo mejorar la habilidad del jugador para rematar a portería usando la cabeza. Junto con un compañero, el jugador debe saltar para recibir un centro aéreo y cabecear el balón hacia la portería. Se recomienda hacer un calentamiento de 5 minutos con trote y estiramientos de cuello y hombros antes de realizar el ejercicio, para evitar tensiones durante el cabezazo.
                  </p>
                </el-alert>
                <el-form-item
                  label="Introduzca el número de intentos hechos:"
                  prop="cabeceoPuerta.total"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.cabeceoPuerta.total"
                  />
                </el-form-item>
                <el-form-item
                  label="Introduzca el número de intentos éxitosos:"
                  prop="cabeceoPuerta.acierto"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.cabeceoPuerta.acierto"
                  />
                </el-form-item>
              </el-space>

              <el-space fill>
                <el-alert type="info" show-icon :closable="false">
                  <p>
                    El cabeceo defensivo está diseñado para mejorar la habilidad del jugador en situaciones defensivas, donde debe despejar balones que vienen por el aire. El jugador debe saltar y cabecear el balón lejos de su área para evitar un gol. Se recomienda realizar un trote de 5 minutos y estiramientos de hombros y cuello, para asegurar una mayor flexibilidad y evitar lesiones durante el cabezazo.
                  </p>
                </el-alert>
                <el-form-item
                  label="Introduzca el número de intentos hechos:"
                  prop="cabeceoDefensivo.total"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.cabeceoDefensivo.total"
                  />
                </el-form-item>
                <el-form-item
                  label="Introduzca los bloqueos éxitosos que no sacaran el balon del campo:"
                  prop="cabeceoDefensivo.acierto"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.cabeceoDefensivo.acierto"
                  />
                </el-form-item>
              </el-space>

              <el-space fill>
                <el-alert type="info" show-icon :closable="false">
                  <p>
                    El ejercicio de cabeceo en movimiento tiene como objetivo evaluar la capacidad del jugador para cabecear el balón mientras se encuentra en movimiento. Junto a un compañero, el jugador debe saltar y cabecear balones que vienen desde diferentes ángulos y direcciones. Antes de iniciar, se recomienda un trote suave de 5 minutos y estiramientos en caderas, rodillas y tobillos para prevenir lesiones durante los saltos y movimientos rápidos.
                  </p>
                </el-alert>
                <el-form-item
                  label="Introduzca el número de intentos realizados:"
                  prop="cabeceoMovimiento.total"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.cabeceoMovimiento.total"
                  />
                </el-form-item>
                <el-form-item
                  label="Introduzca el número de intentos exitosos:"
                  prop="cabeceoMovimiento.acierto"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.cabeceoMovimiento.acierto"
                  />
                </el-form-item>
              </el-space>

              <el-space fill>
                <el-alert type="info" show-icon :closable="false">
                  <p>
                    El ejercicio de duelos aéreos tiene como objetivo mejorar la capacidad del jugador para disputar balones en el aire contra un adversario. El jugador debe saltar para intentar ganar la posesión del balón frente a un compañero que le pase el balón. Se recomienda un calentamiento con trote y estiramientos en tobillos y rodillas para mejorar la agilidad y flexibilidad, evitando posibles lesiones durante los saltos y el contacto físico.
                  </p>
                </el-alert>
                <el-form-item
                  label="Introduzca el número de duelos hechos:"
                  prop="duelosAereos"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.duelosAereos.total"
                  />
                  <el-select
                  placeholder="¿Cuantos duelos ganó?"
                  v-model="form.duelosAereos.winRate"
                  clearable
                >
                  <el-option label="No pude ganar ningun duelo" value="0" />
                  <el-option label="Gané alrededor del 25%" value="25" />
                  <el-option label="Gané la mitad de duelos" value="50" />
                  <el-option label="Gané alrededor del 75%" value="75"/>
                  <el-option label="Gané todos los duelos" value="100" />
                </el-select>
                </el-form-item>
              </el-space>

              <el-space fill>
                <el-alert type="info" show-icon :closable="false">
                  <p>
                    El ejercicio de tackles y entradas limpias está centrado en evaluar la capacidad del jugador para realizar entradas defensivas efectivas sin cometer faltas. El jugador debe recuperar el balón realizando entradas o tackles a su oponente sin cometer infracción. Se recomienda un trote previo de 5 minutos y estiramientos de piernas, tobillos y rodillas, para asegurar que los músculos estén listos para la acción y evitar lesiones al realizar los tackles.
                  </p>
                </el-alert>
                <el-form-item
                  label="Introduzca el número de tackles hechos:"
                  prop="tacklesEntradas.total"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.tacklesEntradas.total"
                  />
                </el-form-item>
                <el-form-item
                  label="Introduzca el número de tackles ganados:"
                  prop="tacklesEntradas.acierto"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.tacklesEntradas.acierto"
                  />
                </el-form-item>
                <el-form-item
                  label="¿Cuantas faltas se realizaron?:"
                  prop="tacklesEntradas.faltas"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.tacklesEntradas.faltas"
                  />
                </el-form-item>
              </el-space>

              <el-space fill>
                <el-alert type="info" show-icon :closable="false">
                  <p>
                    El ejercicio de intercepciones de pase tiene como objetivo mejorar la habilidad de un jugador para anticiparse y robar balones que son pasados por los oponentes. Junto a un compañero, el jugador debe interceptar los balones que el otro pase, utilizando su velocidad y agilidad. Se recomienda un calentamiento de 5 minutos y estiramientos de tobillos, caderas y piernas para activar la musculatura y prevenir lesiones en las extremidades inferiores.
                  </p>
                </el-alert>
                <el-form-item
                  label="Introduzca el número de intercepciones hechos:"
                  prop="intercepcionPase.total"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.intercepcionPase.total"
                  />
                </el-form-item>
                <el-form-item
                  label="Introduzca el número de intercepciones efectivos:"
                  prop="intercepcionPase.acierto"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.intercepcionPase.acierto"
                  />
                </el-form-item>
              </el-space>

              <el-space fill>
                <el-alert type="info" show-icon :closable="false">
                  <p>
                    El ejercicio de marcaje individual y zonal está diseñado para evaluar la capacidad defensiva del jugador en situaciones de marcaje. Un jugador deberá marcar a un oponente de manera individual o cubrir una zona en el campo, dependiendo de la táctica que se utilice. Se recomienda un trote suave de 5 minutos y estiramientos de caderas, piernas y tobillos, para mejorar la flexibilidad y movilidad necesarias en este tipo de ejercicios.
                  </p>
                </el-alert>
                <el-form-item
                  label="¿Qué tan efectivo fue el jugador en su marcaje?:"
                  prop="marcajeIZ"
                  class="selecFormat"
                >
                <el-select v-model="form.marcajeIZ" placeholder="1-10" clearable>
                    <el-option
                    v-for="number in 10"
                    :key="number"
                    :label="`${number}`"
                    :value="number"
                    />
                  </el-select>
                </el-form-item>
              </el-space>

              <el-space fill>
                <el-alert type="info" show-icon :closable="false">
                  <p>
                    El ejercicio de recuperación de balón tiene como objetivo mejorar la capacidad del jugador para recuperar el balón tras una pérdida. El jugador debe moverse rápidamente para interceptar o recuperar un balón perdido de su compañero. Se recomienda un trote previo de 5 minutos y estiramientos dinámicos en piernas y caderas para mejorar la agilidad y prevenir lesiones.
                  </p>
                </el-alert>
                <el-form-item
                  label="Introduzca los intentos de recuperación hechos:"
                  prop="recuperacionBalon.total"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.recuperacionBalon.total"
                  />
                </el-form-item>
                <el-form-item
                  label="Introduzca los intentos de recuperación efectivos:"
                  prop="recuperacionBalon.efectivo"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.recuperacionBalon.efectivo"
                  />
                </el-form-item>
              </el-space>

              <el-space fill>
                <el-alert type="info" show-icon :closable="false">
                  <p>
                    La transición defensa a ataque está diseñada para evaluar la rapidez con la que un equipo puede cambiar de defensa a ataque al recuperar el balón. Un jugador debe moverse rápidamente desde una postura defensiva a una ofensiva, con el objetivo de generar una oportunidad de gol. Se recomienda hacer un trote suave de 5 minutos y estiramientos de piernas y caderas para preparar los músculos para movimientos rápidos y explosivos.
                  </p>
                </el-alert>
                <el-form-item
                  label="Introduzca el número de intentos hechos:"
                  prop="transDefAtk"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.transDefAtk.total"
                  />
                  <el-select
                  label="¿Que tan efectivo fue el jugador?"
                  placeholder="Seleccione una opción"
                  clearable
                  v-model="form.transDefAtk.precision"
                >
                  <el-option label="Excelente, nunca perdió el balon" value="5" />
                  <el-option label="Eficiente, solo perdió el balon un 25% de veces" value="4" />
                  <el-option label="Promedio, perdió el balon un 50% de veces" value="3" />
                  <el-option label="Poco eficiente, perdió el balon en la mayoria de intentos" value="2" />
                  <el-option label="Ineficiente, perdió siempre el balon" value="1" />
                </el-select>
                </el-form-item>
              </el-space>

              <el-space fill>
                <el-alert type="info" show-icon :closable="false">
                  <p>
                    El ejercicio de habilidades con los pies para porteros tiene como objetivo mejorar la capacidad del portero para controlar y pasar el balón con los pies. El portero, con la ayuda de un compañero, debe realizar una serie de pases y recepciones utilizando los pies. Se recomienda un calentamiento previo con trote suave y estiramientos en tobillos y piernas, para asegurar que los músculos de las piernas estén preparados para realizar movimientos rápidos y evitar lesiones.
                  </p>
                </el-alert>
                <el-form-item
                  label="Introduzca el número de intentos hechos:"
                  prop="habPiesPorteros"
                  class="selecFormat"
                >
                  <el-input
                    placeholder="0"
                    v-model="form.habPiesPorteros.total"
                  />
                  <el-select
                  label="¿En que destacó el portero?"
                  placeholder="Seleccione una opción"
                  clearable
                  v-model="form.habPiesPorteros.habilidad"
                >
                  <el-option label="Pases cortos y precisos" value="1" />
                  <el-option label="Pases largos y efectivos" value="2" />
                  <el-option label="Destacó en ambas" value="3" />
                  <el-option label="No destacó en ninguna" value="4" />
                </el-select>
                </el-form-item>
              </el-space>

          </el-form>
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup>
import { reactive, ref } from "vue";

const formSize = ref("default");
const formRef = ref();
const form = reactive({
  pasesCortosLargos:{
    tiros:"",
    acierto:null
  },
  controlMovimiento:{
    acierto:"",
    dif:null
  },
  controlAereo:{
    acierto:"",
    dif:null
  },
  pasesMovimiento:{
    acierto:"",
    precision:null
  },
  recepcionPresion:{
    acierto:"",
    dif:null
  },
  cabeceoPuerta:{
    total:"",
    acierto:""
  },
  cabeceoDefensivo:{
    total:"",
    acierto:""
  },
  cabeceoMovimiento:{
    total:"",
    acierto:""
  },
  duelosAereos:{
    total:"",
    winRate:null
  },
  tacklesEntradas:{
    total:"",
    acierto:"",
    faltas:""
  },
  intercepcionPase:{
    total:"",
    acierto:""
  },
  marcajeIZ:null,
  recuperacionBalon:{
    total:"",
    efectivo:""
  },
  transDefAtk:{
    total:"",
    precision:null
  },
  habPiesPorteros:{
    total:"",
    habilidad:null
  }
  
});

const rules = reactive({
  "pasesCortosLargos.tiros": [
    {
      required: true,
      message: "Introduzca un valor, por favor",
      trigger: "blur",
    },
    {
      pattern: /^[0-9]+$/,
      message: "Introduzca solo números, por favor",
      trigger: "blur",
    },
  ],
  
});
</script>

<style scoped>
.formBox {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  box-sizing: border-box;
}

.docFormat {
  text-align: center;
}

.selecFormat {
  padding-bottom: 30px;
  border-bottom: 2px solid rgb(238, 233, 233);
}
</style>
