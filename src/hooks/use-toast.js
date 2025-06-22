import * as React from "react";

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
};

const toastTimeouts = new Map();

const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  }, 3000); // Reduced delay for alerts

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      alert(`${action.toast.title || ''}\n${action.toast.description || ''}`);
      addToRemoveQueue(action.toast.id);
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, 1),
      };

    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };

    default:
      return state;
  }
};

const listeners = [];
let memoryState = { toasts: [] };

function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

function toast(props) {
  const id = genId();

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
    },
  });

  return {
    id: id,
    dismiss: () => dispatch({ type: "REMOVE_TOAST", toastId: id }),
  };
}

function useToast() {
  const [state, setState] = React.useState(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "REMOVE_TOAST", toastId }),
  };
}

let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

export { useToast, toast };
