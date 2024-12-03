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
                  Este ejercicio busca mejorar la capacidad de generar y
                  finalizar jugadas de ataque. Consiste en que los extremos
                  realicen centros desde las bandas hacia el área, mientras los
                  delanteros se posicionan para rematar al arco. Es importante
                  que los centros sean precisos y con buena dirección, y que los
                  remates busquen tanto potencia como colocación. Antes de
                  realizar este ejercicio, se recomienda trotar durante 5
                  minutos y realizar movimientos de calentamiento dinámico en
                  los brazos y piernas para preparar el cuerpo para los cambios
                  de dirección y el impacto del balón.
                </p>
              </el-alert>
              <el-form-item
                label="Ingrese los tiros realizados:"
                prop="centroRemates.tiros"
                class="selecFormat"
              >
                <el-input
                  placeholder="Tiros hechos"
                  v-model="form.centroRemates.tiros"
                />
              </el-form-item>
              <el-form-item
                label="¿Cuántos aciertos realizó en los tiros hechos?"
                class="selecFormat"
                prop="centroRemates.precision"
              >
                <el-select
                  placeholder="Seleccione una opción"
                  clearable
                  v-model="form.centroRemates.precision"
                >
                  <el-option label="Acerté todas" value="100" />
                  <el-option label="Más del 75%" value="75" />
                  <el-option label="Menos del 75%" value="74" />
                  <el-option label="Más del 50%" value="50" />
                  <el-option label="Menos del 50%" value="49" />
                  <el-option label="Solo el 25%" value="25" />
                  <el-option label="Menos del 25%" value="24" />
                  <el-option label="No acerté nada" value="0" />
                </el-select>
              </el-form-item>
            </el-space>

            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>
                  Este ejercicio se enfoca en desarrollar las habilidades
                  defensivas y la capacidad de anticipación. En el marcaje
                  individual, cada jugador debe asignarse a un oponente y
                  seguirlo de cerca, manteniendo siempre una posición defensiva
                  adecuada. En el marcaje zonal, el jugador debe cubrir un área
                  específica del campo, asegurándose de interceptar pases o
                  bloquear posibles avances. Se recomienda calentar durante 5
                  minutos con trote ligero y ejercicios de movilidad para
                  prevenir lesiones en los desplazamientos cortos e intensos.
                </p>
              </el-alert>
              <el-form-item
                label="Ingrese los tiros interceptados:"
                prop="marcajeIndividual"
                class="selecFormat"
              >
                <el-input
                  placeholder="Tiros bloqueados"
                  v-model="form.marcajeIndividual"
                />
              </el-form-item>
            </el-space>

            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>
                  Este ejercicio busca mejorar el control del balón y la técnica
                  de conducción en espacios reducidos. Consiste en desplazarse
                  rápidamente entre una serie de conos dispuestos en línea recta
                  o en zigzag, utilizando ambos pies para maniobrar el balón. Es
                  importante mantener el balón cerca de los pies y realizar
                  cambios rápidos de dirección. Antes de comenzar, se recomienda
                  trotar 5 minutos y realizar ejercicios de movilidad en los
                  tobillos y rodillas para facilitar los movimientos rápidos y
                  precisos.
                </p>
              </el-alert>
              <el-form-item
                label="Ingrese el inicio y tiempo final:"
                prop="dribblingConos"
                class="selecFormat"
              >
                <div class="demo-time-range">
                  <el-time-select
                    v-model="form.dribblingConos.start"
                    style="width: 240px"
                    :max-time="endTime"
                    class="mr-4"
                    placeholder="Inicio del ejercicio"
                    start="08:30"
                    step="00:15"
                    end="18:30"
                  />
                  <el-time-select
                    v-model="form.dribblingConos.end"
                    style="width: 240px"
                    :min-time="startTime"
                    placeholder="Fin del ejercicio"
                    start="08:30"
                    step="00:15"
                    end="18:30"
                  />
                </div>
              </el-form-item>
            </el-space>

            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>
                  El objetivo de este ejercicio es mejorar la capacidad de
                  control del balón y el manejo en situaciones de presión.
                  Consiste en moverse con el balón en un área limitada, evitando
                  perder la posesión mientras se enfrenta a adversarios u
                  obstáculos. Es importante que el jugador use ambos pies,
                  mantenga el balón bajo control y busque soluciones rápidas
                  para avanzar o protegerlo. Antes de iniciar, trote durante 5
                  minutos y realice estiramientos dinámicos para los tobillos y
                  caderas.
                </p>
              </el-alert>
              <el-form-item
                label="Ingrese el tiempo que tuvo controlado el balon"
                prop="dribblingReducido"
                class="selecFormat"
              >
                <div class="demo-time-range">
                  <el-time-select
                    v-model="form.dribblingReducido.start"
                    style="width: 240px"
                    :max-time="endTime"
                    class="mr-4"
                    placeholder="Inicio del ejercicio"
                    start="08:30"
                    step="00:15"
                    end="18:30"
                  />
                  <el-time-select
                    v-model="form.dribblingReducido.end"
                    style="width: 240px"
                    :min-time="startTime"
                    placeholder="Fin del ejercicio"
                    start="08:30"
                    step="00:15"
                    end="18:30"
                  />
                </div>
              </el-form-item>
            </el-space>

            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>
                  Este ejercicio entrena la capacidad de conducir el balón
                  mientras se corre a alta velocidad. Consiste en avanzar con el
                  balón lo más rápido posible en una distancia determinada (30
                  metros), en tratando de mantener el control del mismo en todo
                  momento. Es fundamental que el jugador use el empeine para
                  empujar el balón hacia adelante de forma controlada. Antes de
                  realizarlo, se sugiere calentar trotando 5 minutos y realizar
                  ejercicios de estiramiento dinámico en las piernas para
                  prevenir lesiones por la alta intensidad del ejercicio.
                </p>
              </el-alert>
              <el-form-item
                label="Ingrese los segundos que tardó:"
                prop="dribblingVelocidad"
                class="selecFormat"
              >
                <el-input
                  placeholder="Tiempo necesitado"
                  v-model="form.dribblingVelocidad"
                />
              </el-form-item>
            </el-space>

            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>
                  Este ejercicio trabaja en el control del balón mientras se
                  realizan cambios rápidos de dirección y velocidad. El jugador
                  debe avanzar con el balón siguiendo una ruta predefinida que
                  incluya giros y variaciones en el ritmo de conducción. Es
                  importante que se use el interior y el exterior del pie para
                  maniobrar el balón, adaptándose a las distintas trayectorias.
                  Antes de comenzar, trote durante 5 minutos y realice
                  estiramientos dinámicos para las piernas y la zona lumbar, ya
                  que el ejercicio requiere flexibilidad y rapidez.
                </p>
              </el-alert>
              <el-form-item
                label="Ingrese los segundos necesitados:"
                prop="dribblingDireccion"
                class="selecFormat"
              >
                <el-input
                  placeholder="Tiempo requerido"
                  v-model="form.dribblingDireccion"
                />
              </el-form-item>
            </el-space>

            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>
                  Este ejercicio busca mejorar la precisión y la potencia en
                  tiros desde media o larga distancia. El jugador debe realizar
                  disparos al arco desde una distancia establecida, enfocándose
                  en apuntar a diferentes áreas de la portería. Es importante
                  mantener una postura adecuada y utilizar el empeine para
                  obtener mayor potencia. Antes de comenzar, realice un
                  calentamiento de 5 minutos, seguido de estiramientos dinámicos
                  para las piernas y tobillos, preparando los músculos para el
                  impacto y el esfuerzo, la distancia recomendada son 15 metros.
                </p>
              </el-alert>
              <el-form-item
                label="Ingrese los tiros realizados:"
                prop="tirosArco"
                class="selecFormat"
              >
                <el-input placeholder="0" v-model="form.tirosArco.total" />
                <el-select
                  placeholder="¿Que tan preciso fue?"
                  v-model="form.tirosArco.aciertos"
                  clearable
                >
                  <el-option label="No acerte ningun gol" value="0" />
                  <el-option label="Acerte cerca del 25% de goles" value="25" />
                  <el-option label="Acerte la mitad de goles" value="50" />
                  <el-option
                    label="Acerte la gran mayoria de goles"
                    value="85"
                  />
                  <el-option label="Acerte todos los goles" value="100" />
                </el-select>
              </el-form-item>
            </el-space>

            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>
                  El objetivo de este ejercicio es entrenar los disparos desde
                  posiciones laterales o angulares en relación con la portería.
                  El jugador debe buscar ajustar sus tiros para sorprender al
                  portero, ya sea buscando la colocación o utilizando potencia
                  según la situación. Se recomienda practicar con ambos pies.
                  Antes de empezar, trote durante 5 minutos y haga ejercicios de
                  movilidad en caderas y tobillos para mejorar el rango de
                  movimiento.
                </p>
              </el-alert>
              <el-form-item
                label="Ingrese los intentos con cada pie:"
                prop="tirosAngulo"
                class="selecFormat"
              >
                <el-input
                  placeholder="Pie dominante"
                  v-model="form.tirosAngulo.dominante"
                />
                <el-input
                  placeholder="Pie no dominante"
                  v-model="form.tirosAngulo.noDominante"
                />
                <el-select
                  placeholder="¿Cuantos aciertos tuvo con el pie dominante?"
                  v-model="form.tirosAngulo.aciertosDominante"
                  clearable
                >
                  <el-option label="No acerte ningun gol" value="0" />
                  <el-option label="Acerte cerca del 25% de goles" value="25" />
                  <el-option label="Acerte la mitad de goles" value="50" />
                  <el-option label="Acerte la gran mayoria de goles" value="85"/>
                  <el-option label="Acerte todos los goles" value="100" />
                </el-select>
                <el-select
                  placeholder="¿Cuantos aciertos tuvo con el pie no dominante?"
                  v-model="form.tirosAngulo.aciertosRecesivo"
                  clearable
                >
                  <el-option label="No acerte ningun gol" value="0" />
                  <el-option label="Acerte cerca del 25% de goles" value="25" />
                  <el-option label="Acerte la mitad de goles" value="50" />
                  <el-option
                    label="Acerte la gran mayoria de goles"
                    value="85"
                  />
                  <el-option label="Acerte todos los goles" value="100" />
                </el-select>
              </el-form-item>
            </el-space>

            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>
                  Este ejercicio combina la habilidad de colocar el balón en un
                  punto específico de la portería con la potencia necesaria para
                  superar al portero. El jugador debe realizar disparos
                  apuntando a zonas específicas, como los ángulos superiores o
                  las esquinas bajas, alternando entre precisión y fuerza, en
                  este caso, el objetivo son las esquinas de la porteria. Es
                  importante mantener una técnica adecuada y usar el empeine o
                  el interior del pie. Antes de comenzar, haga un trote ligero
                  durante 5 minutos y realice ejercicios de movilidad en las
                  piernas.
                </p>
              </el-alert>
              <el-form-item
                label="Ingrese los tiros realizados:"
                prop="tirosPrecision"
                class="selecFormat"
              >
                <el-input
                  placeholder="0"
                  v-model="form.tirosPrecision.tirosEsquinas"
                />
                <el-select
                  placeholder="¿Cuantos aciertos tuvo a las esquinas de la porteria?"
                  v-model="form.tirosPrecision.aciertosEsquinas"
                  clearable
                >
                  <el-option label="No acerte ningun gol" value="0" />
                  <el-option label="Acerte cerca del 25% de goles" value="25" />
                  <el-option label="Acerte la mitad de goles" value="50" />
                  <el-option
                    label="Acerte la gran mayoria de goles"
                    value="85"
                  />
                  <el-option label="Acerte todos los goles" value="100" />
                </el-select>
              </el-form-item>
            </el-space>

            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>
                  Este ejercicio simula situaciones reales de juego en las que
                  el jugador recibe el balón mientras se desplaza. Consiste en
                  recibir un pase en movimiento y disparar al arco sin
                  detenerse. Es importante mantener el equilibrio, ajustar la
                  postura antes del disparo y utilizar ambos pies según sea
                  necesario. Antes de iniciar, trote durante 5 minutos y realice
                  ejercicios de movilidad dinámica en las piernas para prevenir
                  lesiones y mejorar la coordinación.
                </p>
              </el-alert>
              <el-form-item
                label="Ingrese los intentos realizados:"
                prop="tirosMovimiento"
                class="selecFormat"
              >
                <el-input
                  placeholder="Tiros bloqueados"
                  v-model="form.tirosMovimiento.tiros"
                />
                <el-select
                  placeholder="¿Cuantos aciertos tuvo?"
                  v-model="form.tirosMovimiento.aciertos"
                  clearable
                >
                  <el-option label="No acerte ningun gol" value="0" />
                  <el-option label="Acerte cerca del 25% de goles" value="25" />
                  <el-option label="Acerte la mitad de goles" value="50" />
                  <el-option
                    label="Acerte la gran mayoria de goles"
                    value="85"
                  />
                  <el-option label="Acerte todos los goles" value="100" />
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
  centroRemates: {
    tiros: "",
    precision: "",
  },
  marcajeIndividual: "",

  dribblingConos: {
    start: "",
    end: "",
  },
  dribblingReducido: {
    start: "",
    end: "",
  },

  dribblingVelocidad: "",

  dribblingDireccion: "",

  tirosArco: {
    total: "",
    aciertos: "",
  },
  tirosAngulo: {
    dominante: "",
    noDominante: "",
    aciertosDominante: null,
    aciertosRecesivo: null,
  },
  tirosPrecision: {
    tirosEsquinas: "",
    aciertosEsquinas: null,
  },
  tirosMovimiento: {
    tiros: "",
    aciertos: null,
  },
});

const rules = reactive({
  "centroRemates.tiros": [
    {
      required: true,
      message: "Por favor, ingrese la cantidad de tiros realizados.",
      trigger: "blur",
    },
    {
      pattern: /^[0-9]+$/,
      message: "Ingrese un número válido (solo dígitos).",
      trigger: "blur",
    },
  ],
  "centroRemates.precision": [
    {
      required: true,
      message: "Por favor, seleccione una opción de precisión",
      trigger: "change",
    },
  ],
  marcajeIndividual: [
    {
      required: true,
      message: "Por favor, ingrese sus tiros bloqueados",
      trigger: "blur",
    },
    {
      pattern: /^[0-9]+$/,
      message: "Ingrese un número",
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
