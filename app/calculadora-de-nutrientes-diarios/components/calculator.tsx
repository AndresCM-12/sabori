"use client";
import React, { useEffect } from "react";
import styles from "./css/calculator.module.css";
import FeaturedBlog from "@/app/blog/[slug]/components/featured-blog";
import stepSixCoverImage from "../../../public/images/stepsix-cover.webp";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ClientOurProducts from "@/app/components/home/our-products/client.our-products";
import ClientRecipes from "@/app/components/home/recipes/client.recipes";

export default function Calculator() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [infoOfCurrentStep, setInfoOfCurrentStep] = React.useState([]);

  const stepInfo = [
    {
      title: "¿Qué quieres lograr?",
      body: (
        <StepOne
          step={currentStep}
          setStep={setCurrentStep}
          stepInfo={infoOfCurrentStep}
          setInfo={setInfoOfCurrentStep}
        />
      ),
    },
    {
      title: "Información básica",
      body: (
        <StepTwo
          step={currentStep}
          setStep={setCurrentStep}
          stepInfo={infoOfCurrentStep}
          setInfo={setInfoOfCurrentStep}
        />
      ),
    },
    {
      title: "Nivel de actividad diaria",
      body: (
        <StepThree
          step={currentStep}
          setStep={setCurrentStep}
          stepInfo={infoOfCurrentStep}
          setInfo={setInfoOfCurrentStep}
        />
      ),
    },
    {
      title: "Intensidad de ejercicio",
      body: (
        <StepFour
          step={currentStep}
          setStep={setCurrentStep}
          stepInfo={infoOfCurrentStep}
          setInfo={setInfoOfCurrentStep}
        />
      ),
    },
    {
      title: "¡Lo conseguiste!",
      body: (
        <StepFive
          step={currentStep}
          setStep={setCurrentStep}
          stepInfo={infoOfCurrentStep}
          setInfo={setInfoOfCurrentStep}
        />
      ),
    },
    {
      title: "¡Tu resultados están listos!",
      body: (
        <StepSix
          step={currentStep}
          setStep={setCurrentStep}
          stepInfo={infoOfCurrentStep}
          setInfo={setInfoOfCurrentStep}
        />
      ),
    },
  ];

  return (
    <>
      <div className={styles.calculatorWrapper}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressBarBackground}
            style={{
              width: `${(currentStep + 1) * 20}%`,
            }}
          ></div>
          {stepInfo.slice(0, stepInfo.length - 1).map((step, index) => (
            <p
              style={{
                color: index <= currentStep ? "white" : "#d91e3e",
              }}
              onClick={() =>
                index < currentStep ? setCurrentStep(index) : null
              }
              key={index}
            >
              {index + 1}
            </p>
          ))}
        </div>
        {stepInfo[currentStep].body}
      </div>
      {currentStep > 4 ? (
        <Results
          step={currentStep}
          setStep={setCurrentStep}
          stepInfo={infoOfCurrentStep}
          setInfo={setInfoOfCurrentStep}
        />
      ) : null}
      {currentStep >= 4 ? (
        <div>
          <div className={styles.featuredBlogTextWrapper}>
            <h5>Consejos para lograr tus objetivos</h5>
            <p>
              Encuentra artículos prácticos y completos para alcanzar tus
              objetivos nutrimentales, mejorar tu estilo de vida y establecer
              hábitos saludables. Desde consejos sobre nutrición balanceada
              hasta estrategias para incorporar ejercicio y autocuidado, te
              ayudamos a crear un enfoque integral para lograr un bienestar
              holístico, cuidando tanto tu cuerpo como tu mente.
            </p>
            <a href="/blog">Conocer más</a>
          </div>
          <FeaturedBlog />
          <ClientRecipes />
          <ClientOurProducts />
          <div
            style={{
              height: "160px",
            }}
          ></div>
        </div>
      ) : null}
    </>
  );
}

function StepOne({
  setStep,
  step,
  stepInfo,
  setInfo,
}: {
  setStep: Function;
  step: number;
  stepInfo: any;
  setInfo: Function;
}) {
  const options = [
    {
      title: "Bajar de peso",
      description:
        "Reducir grasa corporal a través de un déficit calórico controlado y saludable.",
      value: 0.75,
    },
    {
      title: "Mantener peso",
      description:
        "Mantener tu peso actual equilibrando tu consumo nutricional",
      value: 0.3,
    },
    {
      title: "Aumentar masa muscular",
      description:
        "Incrementar tus musculos mediante un balance nutricional alto en proteína y ejercicio de fuerza",
      value: 0.36,
    },
    {
      title: "Tonificar",
      description:
        "Mejorar la firmeza y definición muscular sin necesariamente aumentar el tamaño de los músculos.",
      value: 0.34,
    },
  ];

  return (
    <div className={styles.calculatorBody}>
      <div className={styles.header}>
        <h2>¿Qué quieres lograr?</h2>
      </div>
      <div className={styles.body}>
        <div className={styles.stepOneWrapper}>
          {options.map((option, index) => (
            <div
              key={index}
              className={styles.hoverItem}
              style={{
                height:
                  stepInfo[step]?.stepOneTitle === option.title
                    ? "fit-content"
                    : "43px",
                backgroundColor:
                  stepInfo[step]?.stepOneTitle === option.title
                    ? "#d91e3e"
                    : "white",

                color:
                  stepInfo[step]?.stepOneTitle === option.title
                    ? "white"
                    : "black",
              }}
              onClick={() => {
                const newValueOfStep = {
                  stepOneTitle: option.title,
                  stepOneValue: option.value,
                };

                const newInfo = [...stepInfo];
                newInfo[step] = newValueOfStep;

                setInfo(newInfo);
              }}
            >
              <h5>{option.title}</h5>
              <p>{option.description}</p>
            </div>
          ))}
        </div>

        <div
          className={styles.nextButton}
          onClick={() => {
            if (stepInfo[step]) {
              step < 4 ? setStep(step + 1) : null;
            }
          }}
        >
          <p
            style={{
              color: stepInfo[step] ? "#d91e3e" : "#f5f5f5",
            }}
          >
            Siguiente
          </p>
          <p
            style={{
              color: stepInfo[step] ? "#d91e3e" : "#f5f5f5",
            }}
          >
            {">"}
          </p>
        </div>
      </div>
    </div>
  );
}

function StepTwo({
  setStep,
  step,
  stepInfo,
  setInfo,
}: {
  setStep: Function;
  step: number;
  stepInfo: any;
  setInfo: Function;
}) {
  const [options, setOptions] = React.useState({
    sex: null as string | null,
    age: null as number | null,
    height: null as number | null,
    weight: null as number | null,
  });

  useEffect(() => {
    if (
      stepInfo[step]?.stepTwoValue &&
      options.sex === null &&
      options.age === null &&
      options.height === null &&
      options.weight === null
    ) {
      setOptions(stepInfo[step].stepTwoValue);
      return;
    }

    if (
      options.sex === null ||
      options.age === null ||
      options.height === null ||
      options.weight === null
    ) {
      return;
    }

    const newValueOfStep = {
      stepTwoTitle: "Información básica",
      stepTwoValue: options,
    };

    const newInfo = [...stepInfo];
    newInfo[step] = newValueOfStep;

    setInfo(newInfo);
  }, [options]);

  return (
    <div className={styles.calculatorBody}>
      <div className={styles.header}>
        <h2>Información básica</h2>
      </div>
      <div className={styles.body}>
        <div className={styles.stepTwoWrapper}>
          <div className={styles.input}>
            <h4>Sexo</h4>
            <select
              value={options.sex || ""}
              onChange={(value) => {
                const newValue = value.currentTarget.value;
                const copyOfOptions = { ...options };
                copyOfOptions.sex = newValue;
                setOptions(copyOfOptions);
              }}
            >
              <option style={{ display: "none" }}></option>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
            </select>
          </div>
          <div className={styles.input}>
            <h4>Edad</h4>
            <input
              value={options.age || ""}
              type="number"
              onChange={(value) => {
                const age = parseInt(value.currentTarget.value);
                const copyOfOptions = { ...options };
                copyOfOptions.age = age;
                setOptions(copyOfOptions);
              }}
            />
          </div>
          <div className={styles.input}>
            <h4>Altura (cm)</h4>
            <input
              value={options.height || ""}
              type="number"
              onChange={(value) => {
                const height = parseInt(value.currentTarget.value);
                const copyOfOptions = { ...options };
                copyOfOptions.height = height;
                setOptions(copyOfOptions);
              }}
            ></input>
          </div>
          <div className={styles.input}>
            <h4>Peso (Kg)</h4>
            <input
              value={options.weight || ""}
              type="number"
              onChange={(value) => {
                const weight = parseInt(value.currentTarget.value);
                const copyOfOptions = { ...options };
                copyOfOptions.weight = weight;
                setOptions(copyOfOptions);
              }}
            ></input>
          </div>
        </div>

        <div
          className={styles.nextButton}
          onClick={() => {
            const isFinished = Object.values(options).every((value) => value);
            if (isFinished) {
              step < 4 ? setStep(step + 1) : null;
            }
          }}
        >
          <p
            style={{
              color: Object.values(options).every((value) => value)
                ? "#d91e3e"
                : "#f5f5f5",
            }}
          >
            Siguiente
          </p>
          <p
            style={{
              color: Object.values(options).every((value) => value)
                ? "#d91e3e"
                : "#f5f5f5",
            }}
          >
            {">"}
          </p>
        </div>
      </div>
    </div>
  );
}

function StepThree({
  setStep,
  step,
  stepInfo,
  setInfo,
}: {
  setStep: Function;
  step: number;
  stepInfo: any;
  setInfo: Function;
}) {
  const options = [
    {
      title: "Sedentario",
      description:
        "Pocas actividades en tu día, mayormente sentado o descansando y no haces ejercicio semanal",
      data: [1.15],
      options: ["No haces ejercicio"],
    },
    {
      title: "Ligero",
      description:
        "Actividades diarias suaves, como caminar o tareas domésticas ligeras, realizas 1 o 2 días de ejercicio por semana.",
      data: [1.2, 1.35],
      options: ["40-60 min intenso", "90-120 min ligero"],
    },
    {
      title: "Moderado",
      description:
        "Actividad diaria regular, como trabajar de pie o caminar por tiempo prolongado; haces 3 a 4 días de ejercicio moderado.",
      data: [1.4, 1.55],
      options: ["60-90 min intenso", "60-90 min ligero"],
    },
    {
      title: "Activo",
      description:
        "Muchas actividades diarias, como caminar largas distancias, cargar objetos; entrenas 4-5 días a la semana.",
      data: [1.6, 1.75],
      options: ["30-45 min intenso", "60-90 min ligero"],
    },
    {
      title: "Muy activo",
      description:
        "Muchas actividades diarias o trabajo físico constante, entrenas 6 a 7 días de ejercicio intenso o prolongado.",
      data: [1.8, 1.95],
      options: ["90 min o más o intenso", "180 min o más ligero"],
    },
  ];

  return (
    <div className={styles.calculatorBody}>
      <div className={styles.header}>
        <h2>Nivel de actividad diaria</h2>
      </div>
      <div className={styles.body}>
        <div className={styles.stepOneWrapper}>
          {options.map((item, index) => (
            <div
              key={index}
              className={styles.hoverItemThree}
              style={{
                height:
                  stepInfo[step]?.stepThreeTitle === item.title
                    ? "fit-content"
                    : "43px",
                backgroundColor:
                  stepInfo[step]?.stepThreeTitle === item.title
                    ? "#d91e3e"
                    : "white",

                color:
                  stepInfo[step]?.stepThreeTitle === item.title
                    ? "white"
                    : "black",
              }}
              onClick={() => {
                const newValueOfStep = {
                  stepThreeTitle: item.title,
                  stepThreeValues: item.data,
                  stepThreeOptions: item.options,
                };

                const newInfo = [...stepInfo];
                newInfo[step] = newValueOfStep;

                setInfo(newInfo);
              }}
            >
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div
          className={styles.nextButton}
          onClick={() => {
            if (stepInfo[step]) {
              step < 4 ? setStep(step + 1) : null;
            }
          }}
        >
          <p
            style={{
              color: stepInfo[step] ? "#d91e3e" : "#f5f5f5",
            }}
          >
            Siguiente
          </p>
          <p
            style={{
              color: stepInfo[step] ? "#d91e3e" : "#f5f5f5",
            }}
          >
            {">"}
          </p>
        </div>
      </div>
    </div>
  );
}

function StepFour({
  setStep,
  step,
  stepInfo,
  setInfo,
}: {
  setStep: Function;
  step: number;
  stepInfo: any;
  setInfo: Function;
}) {
  return (
    <div className={styles.calculatorBody}>
      <div className={styles.header}>
        <h2>Intensidad del ejercicio</h2>
      </div>

      <div className={styles.body}>
        <div className={styles.stepOneWrapper}>
          {stepInfo[step - 1].stepThreeOptions.map(
            (item: string, index: number) => (
              <div
                key={index}
                className={styles.hoverItem}
                style={{
                  backgroundColor:
                    stepInfo[step]?.stepFourTitle === item
                      ? "#d91e3e"
                      : "white",

                  color:
                    stepInfo[step]?.stepFourTitle === item ? "white" : "black",
                }}
                onClick={() => {
                  const newValueOfStep = {
                    stepFourTitle: item,
                    stepFourValue: stepInfo[step - 1].stepThreeValues[index],
                  };
                  const newInfo = [...stepInfo];
                  newInfo[step] = newValueOfStep;
                  setInfo(newInfo);
                }}
              >
                <h5>{item}</h5>
              </div>
            )
          )}
        </div>

        <div
          className={styles.nextButton}
          onClick={() => {
            if (stepInfo[step]) {
              step < 4 ? setStep(step + 1) : null;
            }
          }}
        >
          <p
            style={{
              color: stepInfo[step] ? "#d91e3e" : "#f5f5f5",
            }}
          >
            Siguiente
          </p>
          <p
            style={{
              color: stepInfo[step] ? "#d91e3e" : "#f5f5f5",
            }}
          >
            {">"}
          </p>
        </div>
      </div>
    </div>
  );
}

function StepFive({
  setStep,
  step,
  stepInfo,
  setInfo,
}: {
  setStep: Function;
  step: number;
  stepInfo: any;
  setInfo: Function;
}) {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div className={styles.calculatorBody}>
      <div className={styles.header}>
        <h2>¡Lo conseguiste!</h2>
      </div>

      <div className={styles.body}>
        <h4 className={styles.stepFive}>
          Completaste tu evaluación para nutrientes diarios
        </h4>
        <form action="POST">
          <input type="text" name="Nombre" placeholder="Nombre:" />
          <input type="email" name="Email" placeholder="Email:" />
          <div>
            <input type="checkbox" name="suscribirse" id="suscribirse" />
            <label htmlFor="suscribirse">
              Suscribirme al newsletter y recibir mas información
            </label>
          </div>
          <button
            type="submit"
            style={{
              opacity: isLoading ? 0.5 : 1,
            }}
            disabled={isLoading}
            onClick={async (event) => {
              event.preventDefault();
              setIsLoading(true);
              try {
                const checkbox = document.getElementById(
                  "suscribirse"
                ) as HTMLInputElement;
                if (!checkbox.checked) {
                  alert("Debes aceptar la suscripción para continuar");
                  setIsLoading(false);
                  return;
                }

                const email = document.querySelector(
                  'input[name="Email"]'
                ) as HTMLInputElement;
                const name = document.querySelector(
                  'input[name="Nombre"]'
                ) as HTMLInputElement;
                //We call our api /api/subscribe
                const response = await fetch("/api/subscribe", {
                  body: JSON.stringify({
                    email: email.value,
                    name: name.value,
                    origin: "Sabori - Calculadora",
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                  method: "POST",
                });

                const data = await response.json();
                const errorMessage: string = data.error;
                if (response.status === 201) {
                  setStep(step + 1);
                } else if (errorMessage.includes("ya estás suscrito")) {
                  setStep(step + 1);
                } else {
                  alert(data.error);
                }
                setIsLoading(false);
              } catch (error) {
                setIsLoading(false);
                alert("Ocurrió un error, intenta de nuevo más tarde");
              }
            }}
          >
            Conocer mis resultados
          </button>
        </form>
        <p className={styles.stepFive}>
          Nuestro equipo experto en bienestar y nutrición ha creado esta
          calculadora de nutrientes diarios que te ayudará a conocer lo
          necesario en tu dieta para lograr tus objetivos de salud.
        </p>
      </div>
    </div>
  );
}

function StepSix({
  setStep,
  step,
  stepInfo,
  setInfo,
}: {
  setStep: Function;
  step: number;
  stepInfo: any;
  setInfo: Function;
}) {
  return (
    <div className={styles.calculatorBody}>
      <div className={styles.header}>
        <h2>¡Tu resultados están listos!</h2>
      </div>

      <div className={styles.body}>
        <h4 className={styles.stepSix}>
          ¡Estás un paso más cerca de lograr tus metas!
        </h4>

        <p className={styles.stepSix}>
          ¡Estos resultados son la base para comenzar a transformar tus hábitos
          y alcanzar tus objetivos. Ya sea que busques perder peso, ganar masa
          muscular, tonificar o mantener tu bienestar, este es el inicio de tu
          viaje hacia una vida más saludable y activa. Recuerda que cada pequeño
          esfuerzo suma, y con la constancia, disciplina y una alimentación
          balanceada, lograrás los resultados que deseas. ¡Ahora es el momento
          de ponerte en acción y llevar tu bienestar al siguiente nivel!
        </p>

        <span className={styles.stepSix}>#sabesqueteestascuidando</span>
      </div>
    </div>
  );
}

function Results({
  setStep,
  step,
  stepInfo,
  setInfo,
}: {
  setStep: Function;
  step: number;
  stepInfo: any;
  setInfo: Function;
}) {
  const [results, setResults] = React.useState({
    bmr: 0,
    imc: 0,
    tdee: 0,
    bmlf: 0,
    proteins: 0,
    fats: 0,
    carbs: 0,
  });
  useEffect(() => {
    var bmr = 0;
    var imc = 0;
    var tdee = 0;
    var bmlf = 0;
    var proteins = 0;
    var fats = 0;
    var carbs = 0;

    if (stepInfo[1].stepTwoValue.sex === "hombre") {
      bmr =
        10 * stepInfo[1].stepTwoValue.weight +
        6.25 * stepInfo[1].stepTwoValue.height -
        5 * stepInfo[1].stepTwoValue.age +
        5;
    }
    if (stepInfo[1].stepTwoValue.sex === "mujer") {
      bmr =
        10 * stepInfo[1].stepTwoValue.weight +
        6.25 * stepInfo[1].stepTwoValue.height -
        5 * stepInfo[1].stepTwoValue.age -
        161;
    }

    imc =
      stepInfo[1].stepTwoValue.weight /
      Math.pow(stepInfo[1].stepTwoValue.height / 100, 2);

    tdee = bmr * stepInfo[3].stepFourValue;

    if (stepInfo[0].stepOneTitle === "Bajar de peso") {
      bmlf = tdee * 0.75;
    } else if (stepInfo[0].stepOneTitle === "Mantener peso") {
      bmlf = tdee * 0.3;
    } else if (stepInfo[0].stepOneTitle === "Aumentar masa muscular") {
      bmlf = tdee * 0.36;
    } else if (stepInfo[0].stepOneTitle === "Tonificar") {
      bmlf = tdee * 0.34;
    }

    fats = (bmlf * 0.25) / 9;
    proteins = stepInfo[1].stepTwoValue.weight * 2.2;
    carbs = (bmlf - fats * 9 - proteins * 4) / 4;

    setResults({
      bmr: Math.floor(bmr),
      imc: Math.floor(imc),
      tdee: Math.floor(tdee),
      bmlf: Math.floor(bmlf),
      proteins: Math.floor(proteins),
      fats: Math.floor(fats),
      carbs: Math.floor(carbs),
    });

    // console.log("Bmr: ", bmr);
    // console.log("Imc: ", imc);
    // console.log("Tdee: ", tdee);
    // console.log("Bmlf: ", bmlf);
    // console.log("Proteins: ", proteins);
    // console.log("Fats: ", fats);
    // console.log("Carbs: ", carbs);
  }, []);

  return (
    <>
      <div className={styles.resultsWrapper}>
        <div className={styles.textWrapper}>
          <div>
            <h4>Estos son los resultados de tu evaluación nutrimental</h4>
            <div className={styles.dataWrapper}>
              <p>
                Tasa de metabolismo basal: <span>{results.bmr} (kcal)</span>
              </p>
              <p>
                Índice de masa corporal: <span>{results.imc} (IMC)</span>
              </p>
              <p>
                Objetivos de consumo calórico por día:{" "}
                <span>{results.tdee} (Kcal)</span>
              </p>
              <p>
                Grasas: <span>{results.fats} (g)</span>
              </p>
              <p>
                Proteínas: <span>{results.proteins} (g)</span>
              </p>
              <p>
                Carbohidratos: <span>{results.carbs} (g)</span>
              </p>
            </div>
          </div>
          <div>
            <h3>
              Tus resultados son el reflejo de tu esfuerzo. ¡Cada elección
              saludable te acerca más a tus metas!"
            </h3>
            <span>Si no ves tu correo revisa tu bandeja de spam*</span>
          </div>
        </div>
        <div></div>
        <img src={stepSixCoverImage.src} alt="Imagen de fondo" />
      </div>
      <div className={styles.resultsInfoWrapper}>
        <h4>Conoce más sobre el significado de cada resultado que recibiste</h4>
        <Swiper spaceBetween={20} slidesPerView={"auto"}>
          <SwiperSlide className={styles.slide}>
            <h6>Tasa de Metabolismo Basal (TMB)</h6>
            <p>
              Cantidad de calorías que tu cuerpo necesita para realizar
              funciones básicas en reposo, como respirar o mantener el ritmo
              cardíaco.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <h6>Índice de Masa Corporal (IMC)</h6>
            <p>
              Evalúa tu peso en relación con tu altura para determinar si tienes
              un peso saludable, bajo, sobrepeso o eres obeso. Los rangos
              generales son:
              <br /> Menos de 18.5: Bajo peso.
              <br /> 18.5 - 24.9: Peso saludable.
              <br /> 25 - 29.9: Sobrepeso. <br />
              30 o más: Obesidad.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <h6>Objetivos de Consumo Calórico por Día</h6>
            <p>
              Es la cantidad de calorías que debes consumir diariamente para
              alcanzar tu objetivo, ya sea perder peso, mantenerlo o ganar masa
              muscular.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <h6>Grasas</h6>
            <p>
              Es la cantidad de grasas saludables que necesitas incluir en tu
              dieta para apoyar funciones corporales esenciales como la
              producción de hormonas y la absorción de vitaminas.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <h6>Proteínas</h6>
            <p>
              Es la cantidad de proteínas que debes consumir para ayudar a la
              reparación y crecimiento muscular, además de apoyar otras
              funciones vitales del cuerpo.
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <h6>Carbohidratos</h6>
            <p>
              Son la principal fuente de energía para el cuerpo. La cantidad
              recomendada ayuda a mantener altos niveles de energía y el
              rendimiento en actividades diarias y ejercicios.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
