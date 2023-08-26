import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Principal() {
  return (
    <div className="w-full max-w-[80%] lg:max-w-[30%]">
      <h1 className="text-4xl font-bold lg:text-5xl">Lucas Lima</h1>
      <p className="text-base font-light mt-1 lg:text-xl">
        Desenvolvedor FrontEnd Pleno
      </p>
      <p className="text-sm text-slate-400 font-extralight mt-3 lg:text-base">
        Desenvolvedor Frontend com habilidades em backend e uma expertise em
        design gráfico, unindo criatividade e funcionalidade.
      </p>
      <div className="flex gap-4 mt-6">
        <AiFillGithub
          size={22}
          className="text-slate-400 hover:text-slate-200"
        />
        <BsLinkedin size={20} className="text-slate-400 hover:text-slate-200" />
        <BsInstagram
          size={20}
          className="text-slate-400 hover:text-slate-200"
        />
      </div>
    </div>
  );
}
