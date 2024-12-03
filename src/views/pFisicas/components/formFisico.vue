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
                  El sprint de 40 metros busca observar la velocidad de una
                  persona, consiste en correr 40 metros sin parar, lo que debe
                  registrar en este campo son los segundos que demora en
                  recorrer esos 40 metros, antes de realizar este ejercicio se
                  le sugiere hacer un trote de minimo 5 minutos y estiramientos
                  en circulos con los pies y las piernas, con el fin de evitar
                  una lesion muscular.
                </p>
              </el-alert>
              <el-form-item label="Tiempo utilizado:" prop="sprint40" class="selecFormat">
                <el-input
                  placeholder="Introduzca el tiempo en segundos"
                  v-model="form.sprint40"
                />
              </el-form-item>
            </el-space>

            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>
                  El sprint de 30 metros busca entrenar la velocidad explosiva,
                  debe recorrer 30 metros sin parar y registrar el tiempo en el
                  que se recorrio la distancia, antes de realizarlo se
                  recomiendo un trote de minimo 5 minutos y estiramiento de las
                  extremidades inferiores en circulos con el fin de evitar una
                  lesión.
                </p>
              </el-alert>
              <el-form-item label="Tiempo utilizado:" prop="sprint30" class="selecFormat">
                <el-input
                  placeholder="Introduzca el tiempo en segundos"
                  v-model="form.sprint30"
                />
              </el-form-item>
            </el-space>

            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>
                  En el peso muerto, es fundamental realizar la técnica de
                  manera correcta. Los pies deben estar paralelos al ancho de la
                  cadera y la espalda debe mantenerse recta en todo momento. Al
                  agarrar la pesa, es importante mantener esta postura estable.
                  Durante la subida, la fuerza debe provenir principalmente de
                  la cadera, y al bajar, también debe ser la cadera la que
                  controle el movimiento descendente, evitando doblar la espalda
                  o forzar las rodillas.
                </p>
              </el-alert>
              <el-form-item label="Peso utilizado:" prop="pesoMuerto" class="selecFormat">
                <el-input
                  placeholder="Ingrese el peso utilizado"
                  v-model="form.pesoMuerto"
                />
              </el-form-item>
            </el-space>

            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>
                  En este ejercicio es necesario que mantenga la técnica
                  correcta. Los pies deben estar alineados al ancho de los
                  hombros, con las puntas ligeramente hacia afuera. Durante el
                  movimiento, la espalda debe permanecer recta y el pecho
                  erguido en todo momento. Al bajar, empuje las caderas hacia
                  atrás y doble las rodillas, asegurándose de que los talones se
                  mantengan firmes en el suelo. Al subir, es importante que la
                  fuerza provenga de las piernas, manteniendo el movimiento
                  controlado y evitando inclinarse hacia adelante.
                </p>
              </el-alert>
              <el-form-item
                label="Ingrese las repeticiones hechas:"
                prop="sentadillas"
                class="selecFormat"
              >
                <el-input placeholder="0" v-model="form.sentadillas" />
              </el-form-item>
            </el-space>

            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>
                  En este ejercicio se busca combinar velocidad y cambios de
                  dirección. Comienza corriendo hacia adelante hasta el cono
                  central, luego deslice lateralmente hacia el cono de un lado y
                  regrese al centro. Repita el movimiento hacia el cono opuesto
                  y termine regresando al punto de inicio. Es importante que
                  mantenga una postura baja con las rodillas ligeramente
                  flexionadas durante los desplazamientos laterales y realice
                  los cambios de dirección de manera ágil, evitando frenar
                  bruscamente.
                </p>
              </el-alert>
              <el-form-item
                label="Ingrese el inicio y tiempo final:"
                prop="agilidadT"
                class="selecFormat"
              >
                <div class="demo-time-range">
                  <el-time-select
                    v-model="form.agilidadT.start"
                    style="width: 240px"
                    :max-time="endTime"
                    class="mr-4"
                    placeholder="Inicio del ejercicio"
                    start="08:30"
                    step="00:15"
                    end="18:30"
                  />
                  <el-time-select
                    v-model="form.agilidadT.end"
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
                  Este ejercicio mide velocidad y coordinación en zigzag.
                  Empiece desde el primer cono y corra en línea recta hasta el
                  segundo, rodeándolo. Luego, realice un zigzag hacia el tercer
                  cono y regrese al punto de inicio rodeando los conos
                  nuevamente. Es importante que mantenga el cuerpo estable, use
                  los brazos para equilibrarse y evite perder tiempo en los
                  giros. Mantenga pasos cortos y rápidos al cambiar de
                  dirección.
                </p>
              </el-alert>
              <el-form-item
                label="Ingrese el inicio y fin del ejercicio:"
                prop="agilidadL"
                class="selecFormat"
              >
                <div class="demo-time-range">
                  <el-time-select
                    v-model="form.agilidadL.start"
                    style="width: 240px"
                    :max-time="endTime"
                    class="mr-4"
                    placeholder="Inicio del ejercicio"
                    start="08:30"
                    step="00:15"
                    end="18:30"
                  />
                  <el-time-select
                    v-model="form.agilidadL.end"
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
                  En este ejercicio, siéntese con las piernas estiradas hacia
                  adelante y juntas. Inclínese lentamente hacia adelante con los
                  brazos extendidos, intentando alcanzar la mayor distancia
                  posible con las yemas de los dedos. Es importante que mantenga
                  la espalda recta mientras se inclina, evitando doblar las
                  rodillas. Mantenga la posición durante unos segundos para
                  medir la distancia alcanzada.
                </p>
              </el-alert>
              <el-form-item label="Seleccione una opción:" prop="flexTronco"  class="selecFormat">
                  <el-select v-model="form.flexTronco" placeholder="¿Cuanto esfuerto le tomo?" clearable>
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
                  Acuéstese boca arriba con las piernas rectas. Levante una
                  pierna hacia arriba sin doblar la rodilla, manteniendo la otra
                  pierna apoyada en el suelo. Es importante que realice el
                  movimiento de forma lenta y controlada, sintiendo la tensión
                  en la parte posterior del muslo. Asegúrese de no arquear la
                  espalda y deténgase si siente dolor.
                </p>
              </el-alert>
              <el-form-item
                label="Seleccione una opción:"
                prop="flexPiernas"
                class="selecFormat"
              >
                <el-select placeholder="¿Cuantos grados pudo flexionarse?" clearable>
                  <el-option label="Menos de 45°" value="44" />
                  <el-option label="Entre 45° y 70°" value="65" />
                  <el-option label="Más de 70°" value="71" />
                </el-select>
              </el-form-item>
            </el-space>

            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>
                  En este ejercicio, párese junto a una pared con un brazo
                  extendido hacia arriba para marcar su altura inicial. Desde
                  esa posición, flexione ligeramente las rodillas y realice un
                  salto explosivo, alcanzando la mayor altura posible con la
                  mano. Es importante que mantenga la postura correcta durante
                  el salto, con el impulso proveniente de las piernas y los
                  brazos. Al caer, asegúrese de aterrizar con ambos pies y de
                  manera controlada.
                </p>
              </el-alert>
              <el-form-item
                label="Mida e ingrese la altura del salto en cm:"
                prop="saltoVertical"
                class="selecFormat"
              >
                <el-input placeholder="0" v-model="form.saltoVertical" />
              </el-form-item>
            </el-space>

            <el-space fill>
              <el-alert type="info" show-icon :closable="false">
                <p>
                  Para este ejercicio, coloque los pies paralelos y flexione
                  ligeramente las rodillas para preparar el salto. Impúlsese
                  hacia adelante lo más lejos posible, usando los brazos para
                  generar mayor potencia. Es importante que al aterrizar lo haga
                  con ambos pies y mantenga el equilibrio, evitando caer hacia
                  adelante o hacia los lados. Controle el movimiento para evitar
                  lesiones.
                </p>
              </el-alert>
              <el-form-item
                label="Mida e ingrese la distancia del salto en cm:"
                prop="saltoHorizontal"
                class="selecFormat"
              >
                <el-input placeholder="0" v-model="form.saltoHorizontal" />
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
  sprint40: "",
  sprint30: "",
  pesoMuerto: "",
  sentadillas: "",
  agilidadT: {
    start: "",
    end: ""
  },
  agilidadL: {
    start: "",
    end: ""
  },
  flexTronco:"",
  flexPiernas:"",
  saltoVertical:"",
  saltoHorizontal:""

});

const rules = reactive({
  sprint40: [
    {
      required: false,
      message: "Introduzca un tiempo valido, por favor",
      trigger: "blur",
    },
    {
      min: 1,
      max: 3,
      message: "El tiempo debe ser de minimo 3 caracteres",
      trigger: "blur",
    },
  ],
  sprint30: [
    {
      required: false,
      message: "Introduzca un tiempo valido, por favor",
      trigger: "blur",
    },
    {
      min: 1,
      max: 3,
      message: "El tiempo debe ser de minimo 3 caracteres",
      trigger: "blur",
    },
  ],
  pesoMuerto: [
    {
      required: false,
      message: "",
      trigger: "blur",
    },
    {
      message: "Ingrese un peso valido",
      trigger: "blur",
    },
  ],
  sentadillas: [
    {
      required: false,
      message: "",
      trigger: "blur",
    },
    {
      message: "",
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
