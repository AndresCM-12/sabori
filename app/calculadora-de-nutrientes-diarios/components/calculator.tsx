"use client";
import React from "react";
import styles from "./css/calculator.module.css";
export default function Calculator() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const stepInfo = [
    {
      title: "¿Qué quieres lograr?",
      body: <StepOne step={currentStep} setStep={setCurrentStep} />,
    },
    {
      title: "Información básica",
      body: <StepOne step={currentStep} setStep={setCurrentStep} />,
    },
    {
      title: "Nivel de actividad diaria",
      body: <StepOne step={currentStep} setStep={setCurrentStep} />,
    },
    {
      title: "Intensidad de ejercicio",
      body: <StepOne step={currentStep} setStep={setCurrentStep} />,
    },
    {
      title: "¡Lo conseguiste!",
      body: <StepOne step={currentStep} setStep={setCurrentStep} />,
    },
    {
      title: "¡Tu resultados están listos!",
      body: <StepOne step={currentStep} setStep={setCurrentStep} />,
    },
  ];

  const [infoOfCurrentStep, setInfoOfCurrentStep] = React.useState({});

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
    </>
  );
}

function StepOne({ setStep, step }: { setStep: Function; step: number }) {
  const options = [
    {
      title: "Bajar de peso",
      description:
        "laborious physical exercise, except to obtain joy a pleasure that has no annoying consequences",
    },
    {
      title: "Mantener peso",
      description:
        "laborious physical exercise, except to obtain joy a pleasure that has no annoying consequences",
    },
    {
      title: "Aumentar masa muscular",
      description:
        "laborious physical exercise, except to obtain joy a pleasure that has no annoying consequences",
    },
    {
      title: "Tonificar",
      description:
        "laborious physical exercise, except to obtain joy a pleasure that has no annoying consequences",
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
            <div key={index} className={styles.hoverItem}>
              <h5>{option.title}</h5>
              <p>{option.description}</p>
            </div>
          ))}
        </div>

        <div
          onClick={() => {
            step < 4 ? setStep(step + 1) : null;
          }}
        >
          <p>Siguiente</p>
          <p>{">"}</p>
        </div>
      </div>
    </div>
  );
}
