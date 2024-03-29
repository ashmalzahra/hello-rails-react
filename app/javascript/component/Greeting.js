import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchGreeting} from "../redux/greetings/greetingSlice";

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting.greeting);
  const dispatch = useDispatch();
  const ifSucceed = useSelector((store) => store.greeting.ifSucceed);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch, ifSucceed]);

  return (
   <h3>{greeting}</h3>
  );
};

export default Greeting;