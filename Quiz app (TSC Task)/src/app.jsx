/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function App() {
  const [Background, setBackground] = useState('Dark');
  const [selectQuiz, setSelectQuiz] = useState(null);
  const [QuizData, setQuizData] = useState();

  const QuizSelect = id => {
    setSelectQuiz(id);
    <Navigate to="/Quiz" />;
  };

  const Quiz = async () => {
    const res = await fetch('http://localhost:3000/QuizData');
    const json = await res.json();
    console.log(json);
    setQuizData(json);
  };
  useEffect(() => {
    Quiz();
  }, []);
  // console.log('data quiz', QuizData);
  console.log('selected quiz', selectQuiz);

  return (
    <section
      className={`min-h-screen ${Background === 'Light' ? 'whiteMode' : 'DarkMode'}`}
    >
      <header className="pt-5">
        <div className="flex justify-end gap-4 px-20">
          {' '}
          <button
            className={`rounded-md border-2 px-2 font-bold ${Background === 'Light' ? 'border-black' : 'border-white'}`}
            type="btn"
            onClick={() => setBackground('Light')}
          >
            Light
          </button>
          <button
            className={`rounded-md border-2 px-2 font-bold ${Background === 'Light' ? 'border-black' : 'border-white'}`}
            type="btn"
            onClick={() => setBackground('Dark')}
          >
            Dark
          </button>
        </div>
      </header>
      <main className=" mx-5 flex h-[28rem] flex-col gap-3 pt-20 sm:flex-row md:mx-16 lg:mx-40 ">
        <div className="flex flex-1 flex-col gap-3">
          <h2 className="text-5xl font-thin">Welcome to the</h2>
          <h1 className="text-5xl font-bold">Frontend Quiz!</h1>
          <h2 className="pt-5 text-lg">Pick a subject to get started.</h2>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          {QuizData?.map(x => (
            <button
              onClick={() => QuizSelect(x.id)}
              key={x.id}
              className={`flex items-center rounded-xl border-2 bg-slate-700 p-1 px-5 py-3 ${Background === 'Light' ? 'whiteMode' : 'DarkMode'}`}
            >
              {x.title}
            </button>
          ))}
        </div>
      </main>
    </section>
  );
}

export default App;
