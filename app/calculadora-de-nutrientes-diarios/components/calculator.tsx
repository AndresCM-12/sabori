"use client";
import React, { useEffect } from "react";
import styles from "./css/calculator.module.css";
import FeaturedBlog from "@/app/blog/[slug]/components/featured-blog";
import Recipes from "@/app/components/home/recipes";
import OurProducts from "./our-products";
import stepSixCoverImage from "../../../public/images/stepsix-cover.webp";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

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
            <h5>Artículos destacados</h5>
            <p>
              laborious physical exercise, except to obtain some advantage from
              it? But who has any right to find fault with a man who chooses to
              enjoy a pleasure that has no annoying consequences, or one who
              avoids a pain that produces no resultant pleasure?"
            </p>
            <a href="/blog">ver todo</a>
          </div>
          <FeaturedBlog />
          <Recipes />
          <OurProducts />
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
        "laborious physical exercise, except to obtain joy a pleasure that has no annoying consequences",
      value: 0.75,
    },
    {
      title: "Mantener peso",
      description:
        "laborious physical exercise, except to obtain joy a pleasure that has no annoying consequences",
      value: 0.3,
    },
    {
      title: "Aumentar masa muscular",
      description:
        "laborious physical exercise, except to obtain joy a pleasure that has no annoying consequences",
      value: 0.36,
    },
    {
      title: "Tonificar",
      description:
        "laborious physical exercise, except to obtain joy a pleasure that has no annoying consequences",
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
              console.log(stepInfo);
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
      console.log("First time");
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

    console.log("Updating the value of step two");
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
            <h4>Altura</h4>
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
            <h4>Peso</h4>
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
              console.log(stepInfo);
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
        "No haces ejercicio, trabajas en una oficina o estudias y no haces ejercicio",
      data: [1.15],
      options: ["No haces ejercicio"],
    },
    {
      title: "Ligero",
      description:
        "laborious physical exercise, except to obtain joy a pleasure that has no annoying consequences",
      data: [1.2, 1.35],
      options: ["40-60 min intenso", "90-120 min ligero"],
    },
    {
      title: "Moderado",
      description:
        "laborious physical exercise, except to obtain joy a pleasure that has no annoying consequences",
      data: [1.4, 1.55],
      options: ["60-90 min intenso", "60-90 min ligero"],
    },
    {
      title: "Activo",
      description:
        "laborious physical exercise, except to obtain joy a pleasure that has no annoying consequences",
      data: [1.6, 1.75],
      options: ["30-45 min intenso", "60-90 min ligero"],
    },
    {
      title: "Muy activo",
      description:
        "laborious physical exercise, except to obtain joy a pleasure that has no annoying consequences",
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
              console.log(stepInfo);
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
              console.log(stepInfo);
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
            onClick={() => {
              setStep(step + 1);
            }}
          >
            Conocer mis resultados
          </button>
        </form>
        <p className={styles.stepFive}>
          laborious physical exercise, except to obtain some advantage from it?
          But who has any right to find fault with a man who chooses to enjoy a
          pleasure that has no annoying consequences, or one who avoids a pain
          that produces no resultant pleasure?"
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
          Revisa tu correo para leer a detalle tus resultados
        </h4>

        <p className={styles.stepSix}>
          laborious physical exercise, except to obtain some advantage from it?
          But who has any right to find fault with a man who chooses to enjoy a
          pleasure that has no annoying consequences, or one who avoids a pain
          that produces no resultant pleasure?"laborious physical exercise,
          except to obtain some advantage from it? But who has any right to find
          fault with a man who chooses to enjoy a pleasure that has no annoying
          consequences, or one who avoids a pain that produces no resultant
          pleasure?"
        </p>

        <span className={styles.stepSix}>#sabesqueteestascuidadndo</span>
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
  var results = {};
  useEffect(() => {
    //Here we calculate the results on load
    console.log("Calculating the results");
  }, []);

  return (
    <>
      <div className={styles.resultsWrapper}>
        <div className={styles.textWrapper}>
          <div>
            <h4>Estos son los resultados de tu evaluación nutrimental</h4>
            <div className={styles.dataWrapper}>
              <p>
                Tasa de metabolismo basal: <span>$34</span>
              </p>
              <p>
                Índice de masa corporal: <span>$34</span>
              </p>
              <p>
                Objetivos de consumo calórico por día: <span>$34</span>
              </p>
              <p>
                Grasas: <span>$34</span>
              </p>
              <p>
                Proteínas: <span>$34</span>
              </p>
              <p>
                Carbohidratos: <span>$34</span>
              </p>
            </div>
          </div>
          <div>
            <h3>
              Revisa tu correo para descubrir más detalles de cómo llevar a cabo
              tu plan de alimentación
            </h3>
            <span>Si no ves tu correo revisa tu bandeja de spam*</span>
          </div>
        </div>
        <div></div>
        <img src={stepSixCoverImage.src} alt="Imagen de fondo" />
      </div>
      <div className={styles.resultsInfoWrapper}>
        <h4>Conoce más sobre el significado de cada resultado que recibiste</h4>
        <Swiper spaceBetween={20}>
          <SwiperSlide
            className={styles.slide}
            style={{
              width: "300px !important",
              height: "fit-content",
              borderRadius: "30px",
              padding: "20px",
            }}
          >
            <h6>Tasa de metabolismo basal</h6>
            <p>
              laborious physical exercise, except to obtain some who avoids a
              pain that produces no resultant pleasure?"laborious physical
              exercise, except to obtain some advantage from it? But who has any
              right to find fault with a man who chooses to enjoy a pleasure
              that has no annoying consequences, or one who avoids a pain that
              produces no resultant pleasure?"
            </p>
          </SwiperSlide>
          <SwiperSlide
            className={styles.slide}
            style={{
              width: "300px",
              height: "fit-content",
              borderRadius: "30px",
              padding: "20px",
            }}
          >
            <h6>Índice de masa corporal</h6>
            <p>
              laborious physical exercise, except to obtain some who avoids a
              pain that produces no resultant pleasure?"laborious physical
              exercise, except to obtain some advantage from it? But who has any
              right to find fault with a man who chooses to enjoy a pleasure
              that has no annoying consequences, or one who avoids a pain that
              produces no resultant pleasure?"
            </p>
          </SwiperSlide>
          <SwiperSlide
            className={styles.slide}
            style={{
              width: "300px",
              height: "fit-content",
              borderRadius: "30px",
              padding: "20px",
            }}
          >
            <h6>Objetivos de consumo calórico por día</h6>
            <p>
              laborious physical exercise, except to obtain some who avoids a
              pain that produces no resultant pleasure?"laborious physical
              exercise, except to obtain some advantage from it? But who has any
              right to find fault with a
            </p>
          </SwiperSlide>
          <SwiperSlide
            className={styles.slide}
            style={{
              width: "300px",
              height: "fit-content",
              borderRadius: "30px",
              padding: "20px",
            }}
          >
            <h6>Grasas</h6>
            <p>
              laborious physical exercise, except to obtain some who avoids a
              pain that produces no resultant pleasure?"laborious physical
              exercise, except to obtain some advantage from it? But who has any
              right to find fault with a
            </p>
          </SwiperSlide>
          <SwiperSlide
            className={styles.slide}
            style={{
              width: "300px",
              height: "fit-content",
              borderRadius: "30px",
              padding: "20px",
            }}
          >
            <h6>Proteínas</h6>
            <p>
              laborious physical exercise, except to obtain some who avoids a
              pain that produces no resultant pleasure?"laborious physical
              exercise, except to obtain some advantage from it? But who has any
              right to find fault with a
            </p>
          </SwiperSlide>
          <SwiperSlide
            className={styles.slide}
            style={{
              width: "300px",
              height: "fit-content",
              borderRadius: "30px",
              padding: "20px",
            }}
          >
            <h6>Carbohidratos</h6>
            <p>
              laborious physical exercise, except to obtain some who avoids a
              pain that produces no resultant pleasure?"laborious physical
              exercise, except to obtain some advantage from it? But who has any
              right to find fault with a
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
