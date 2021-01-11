import React from "react";
import { Transition } from "react-transition-group";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import { useMutation, useQueryCache } from "react-query";

import { postTodo } from "api/postTodo";

import CloseIcon from "assets/svg/close";
import { type } from "os";

type Props = {
  inProp: boolean;
  onClose: () => void;
};

type Inputs = {
  title: string;
  status: "completed" | "uncompleted";
};

const DURATION = 240;

const formDefaultStyle = {
  transition: `bottom ${DURATION}ms ease-in-out, opacity ${
    DURATION * 2
  }ms ease-in-out`,
  opacity: 0,
  bottom: "-180px",
};

const formTransitionStyles = {
  unmounted: { bottom: "-180px", opacity: 0 },
  entering: { bottom: 0, opacity: 1 },
  entered: { bottom: 0, opacity: 1 },
  exiting: { bottom: "-180px", opacity: 0 },
  exited: { bottom: "-180px", opacity: 0 },
};

const overlayDefaultStyle = {
  transition: `bottom ${DURATION}ms ease-in-out ,opacity ${
    DURATION * 2
  }ms ease-in-out`,
  opacity: 0,
  display: "none",
};

const overlayTransitionStyles = {
  unmounted: { bottom: "-180px", opacity: 0 },
  entering: { display: "block", opacity: 0.85 },
  entered: { display: "block", opacity: 0.85 },
  exiting: { bottom: "-180px", opacity: 0 },
  exited: { bottom: "-180px", opacity: 0 },
};

const Form: React.FC<Props> = ({ inProp, onClose }) => {
  const { register, handleSubmit, errors, reset } = useForm<Inputs>();

  const onSubmit = (data: Inputs): void => {
    console.log("data ??", data);
  };

  console.log("errors ??", errors);

  return (
    <Transition in={inProp} timeout={DURATION}>
      {(state) => (
        <>
          <div
            onClick={onClose}
            style={{
              ...overlayDefaultStyle,
              ...overlayTransitionStyles[state],
            }}
            className="fixed left-0 top-0 bottom-0 right-0 bg-black"
          />

          <div
            style={{
              ...formDefaultStyle,
              ...formTransitionStyles[state],
            }}
            className="fixed flex flex-col z-10 inset-x-0 rounded-t-lg p-4 h-32 bg-white"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center items-center bg-gray-200 px-4 py-2 rounded-lg box-border"
            >
              <input
                ref={register({
                  required: {
                    value: true,
                    message: "This field is required!",
                  },
                  minLength: {
                    value: 8,
                    message: "Minimum characters is 8",
                  },
                  maxLength: {
                    value: 30,
                    message: "No more than 30 characters",
                  },
                })}
                name="title"
                placeholder="Belajar"
                className="text-darkPurple flex-1 bg-transparent outline-none"
              />
              <input
                ref={register}
                name="status"
                defaultValue="uncompleted"
                className="hidden"
              />

              <input
                type="submit"
                value="Add"
                className="bg-transparent text-md font-bold text-darkPurple outline-none ml-1"
              />
            </form>
            <span className="text-xs text-red-500 font-semibold tracking-wide mt-2 pl-1">
              {errors?.title?.message}
            </span>

            <span
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                bottom: "10px",
                left: "50%",
              }}
            >
              <CloseIcon />
            </span>
          </div>
        </>
      )}
    </Transition>
  );
};

export default Form;
