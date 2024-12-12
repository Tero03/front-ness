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
                label="¿Como fue su rendimiento?"
                class="selecFormat"
                prop="centroRemates"
              >
                <el-select
                  placeholder="Seleccione una opción"
                  clearable
                  v-model="form.centroRemates"
                >
                  <el-option label="Acerté todos los intenos." value="acerte todos los goles" />
                  <el-option label="Acerté la gran mayoria de intentos." value="acerte la gran mayoria de intentos" />
                  <el-option label="Acerté mas de la mitad de intentos." value="acerte mas de la mitad de intentos" />
                  <el-option label="Acerté la mitad de intentos." value="acerte la mitad de intentos" />
                  <el-option label="Acerté menos de la mitad de intentos." value="acerte menos de la mitad de intentos" />
                  <el-option label="Acerté muy pocos goles" value="acerte muy pocos goles." />
                  <el-option label="No acerté nada" value="no acerte nada" />
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
                label="¿Como fue su rendimiento?"
                prop="marcajeIndividual"
                class="selecFormat"
              >
              <el-select
                  placeholder="Seleccione una opción"
                  clearable
                  v-model="form.marcajeIndividual"
                >
                  <el-option label="Acerté todos los intenos." value="acerte todos los goles" />
                  <el-option label="Acerté la gran mayoria de intentos." value="acerte la gran mayoria de intentos" />
                  <el-option label="Acerté mas de la mitad de intentos." value="acerte mas de la mitad de intentos" />
                  <el-option label="Acerté la mitad de intentos." value="acerte la mitad de intentos" />
                  <el-option label="Acerté menos de la mitad de intentos." value="acerte menos de la mitad de intentos" />
                  <el-option label="Acerté muy pocos goles" value="acerte muy pocos goles." />
                  <el-option label="No acerté nada" value="no acerte nada" />
                </el-select>
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
                label="Ingrese el tiempo en segundos:"
                prop="dribblingConos"
                class="selecFormat"
              >
              <el-input
                  placeholder="0"
                  v-model="form.dribblingConos"
                />
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
                label="Ingrese el tiempo que tuvo controlado el balon:"
                prop="dribblingReducido"
                class="selecFormat"
              >
              <el-input
                  placeholder="0"
                  v-model="form.dribblingReducido"
                />
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
                  placeholder="0"
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
                  placeholder="0"
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
                label="¿Como fue su desempeño?"
                prop="tirosArco"
                class="selecFormat"
              >
                <el-select
                  placeholder="Seleccione una opción"
                  v-model="form.tirosArco"
                  clearable
                >
                <el-option label="Acerté todos los goles." value="acerte todos los goles" />
                <el-option label="Acerté la gran mayoria de goles." value="acerte la gran mayoria de goles"/>
                <el-option label="Acerté la mitad de goles." value="acerte la mitad de goles" />
                <el-option label="Acerté cerca del 25% de goles." value="acerte menos de la mitad de goles" />
                  <el-option label="No acerté ningun gol." value="no acerte ningun gol" />
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
                label="¿Como fue su desempeño?"
                prop="tirosAngulo"
                class="selecFormat"
              >
                <el-select
                  placeholder="Seleccione una opción"
                  v-model="form.tirosAngulo"
                  clearable
                >
                  <el-option label="Tengo control total con ambos pies." value="tengo control total con ambos pies" />
                  <el-option label="Tuve mejor rendimiento con mi pie dominante." value="tuve mejor rendimiento con mi pie dominante" />
                  <el-option label="No tengo tanto control con mi pie dominante." value="no tengo tanto control con mi pie dominante" />
                  <el-option label="No tengo control con ninguno de mis pies." value="No tengo control con ninguno de mis pies"/>
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
                label="¿Como fue su desempeño?"
                prop="tirosPrecision"
                class="selecFormat"
              >
                <el-select
                  placeholder="Seleccione una opción"
                  v-model="form.tirosPrecision"
                  clearable
                >
                  <el-option label="Todos mis intentos fueron exitosos." value="todos mis intentos fueron exitosos" />
                  <el-option label="Acerté la gran mayoria de tiros." value="acerte la gran mayoria de tiros" />
                  <el-option label="Acerté la mitad de mis intentos." value="acerte la mitad de mis intentos" />
                  <el-option label="Acerte menos de la mitad de mis intentos." value="acerte menos de la mitad de mis intentos" />
                  <el-option label="Fallé en todos mis intentos." value="falle en todos mis intentos" />
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
                label="¿Cómo fue su desempeño?"
                prop="tirosMovimiento"
                class="selecFormat"
              >
                <el-select
                  placeholder="Seleccione una opción"
                  v-model="form.tirosMovimiento"
                  clearable
                >
                  <el-option label="No perdi el balón mientras me movia." value="no perdi el balon mientras me movia" />
                  <el-option label="Casi nunca perdi el balon." value="casi nunca perdi el balon" />
                  <el-option label="Aveces perdia el balon." value="aveces perdia el balon" />
                  <el-option label="Perdia muchas veces el balon." value="perdia muchas veces el balon" />
                  <el-option label="Perdí siempre el balon" value="perdi siempre el balon" />
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
import { reactive, ref, watch } from "vue";

const propiedad = defineProps({
  dataValue: Object,
});

const formSize = ref("default");
const formRef = ref();
const form = reactive({
  centroRemates:null,

  marcajeIndividual: null,

  dribblingConos: "",

  dribblingReducido: "",

  dribblingVelocidad: "",

  dribblingDireccion: "",

  tirosArco: null,

  tirosAngulo: null,

  tirosPrecision:null,

  tirosMovimiento: null
});

//Obtains the data from the data base
const datosFormulario = () => {
  form.centroRemates = propiedad.dataValue[0].centros_remates_delanteros_extremos;
  form.marcajeIndividual = propiedad.dataValue[0].marcaje_individual_zonal;
  form.dribblingConos = propiedad.dataValue[0].dribbling_conos;
  form.dribblingReducido = propiedad.dataValue[0].dribbling_espacio_reducido;
  form.dribblingVelocidad = propiedad.dataValue[0].dribbling_velocidad_maxima;
  form.dribblingDireccion = propiedad.dataValue[0].dribbling_cambio_direccionYritmo;
  form.tirosArco = propiedad.dataValue[0].tiro_arco_distancia;
  form.tirosAngulo = propiedad.dataValue[0].tiro_arco_angulo;
  form.tirosPrecision = propiedad.dataValue[0].tiro_arco_precision_potencia;
  form.tirosMovimiento = propiedad.dataValue[0].tiro_arco_movimiento;
  
};

//Cleans form fields
const formClear = () => {
  formRef.value.resetFields();
};

//validates if the form fields are valid
const validateForm = () => {
  return new Promise((resolve) => {
    formRef.value?.validate((valid) => {
      if (valid) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
};

defineExpose({ validateForm, form, formClear });

watch(
  () => propiedad.dataValue,
  (newData) => {
    console.log("datos recibidos AÑA ", newData);
    datosFormulario();
  }
);

const rules = reactive({
  
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
