import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useFormComponentStyles } from "./form-component.styles";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { addCard } from "../../redux/features/card";

export const FormCard = () => {
  const classes = useFormComponentStyles();
  const dispatch = useDispatch();

  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [amount, setAmount] = useState("");
  // const [numberError, setNumberError] = useState(false);
  // const [dateError, setDateError] = useState(false);
  // const [cvvError, setCvvError] = useState(false);
  // const [amountError, setAmountError] = useState(false);
  // const [formValid, setFormValid] = useState(false);
  const [error, setError] = useState({
    number: false,
    cvv: false,
    date: false,
    amount: false,
  });

  const handleChangedNumber = (e) => {
    if (e.target.value.length > 12) return;
    setNumber(e.target.value);
  };
  const handleChangedCvv = (e) => {
    if (e.target.value.length > 3) return;
    setCvv(e.target.value);
  };
  const handleChangedDate = (e) => {
    if (e.target.value.length > 10) return;
    setDate(e.target.value);
  };
  const handleChangedAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleError = () => {
    if (number.length === 12 && Number.isInteger(+number)) {
      return setError({
        ...error,
        number: true,
        date: true,
        cvv: true,
        amount: true,
      });
    }
  };

  // const isDisabled =
  //   number.length === 12 ||
  //   cvv.length === 3 ||
  //   date.length === 10 ||
  //   amount.length > 0;

  const disabled = Object.values(error).some((val) => val);

  const Pay = () => {
    // if (!number) {
    //   setNumberError(true);
    // }
    // if (!date) {
    //   setDateError(true);
    // }
    // if (!cvv) {
    //   setCvvError(true);
    // }
    // if (!amount) {
    //   setAmountError(true);
    // }
    if (number && date && cvv && amount) {
      dispatch(addCard(number, date, cvv, amount));
    }
  };

  // const blurHandler = (e) => {};
  // console.log(!!numberError);
  // useEffect(() => {
  //   if (numberError || dateError || cvvError || amountError) {
  //     setFormValid(false);
  //   } else {
  //     setFormValid(true);
  //   }
  // }, [numberError, dateError, cvvError, amountError]);

  console.log(Object.values(error));

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          name="number"
          id="filled-error"
          label="Card Number"
          variant="filled"
          type="number"
          value={number}
          placeholder="000 000 000 000"
          onChange={handleChangedNumber}
          required={true}
          autoFocus
          onBlur={handleError}
        />
        <TextField
          name="date"
          id="filled-error-helper-text"
          variant="outlined"
          type="date"
          value={date}
          onChange={handleChangedDate}
          required={true}
          onBlur={handleError}
        />
      </div>
      <div>
        <TextField
          name="cvv"
          id="outlined-error"
          label="CVV"
          variant="filled"
          value={cvv}
          type="number"
          placeholder="000"
          onChange={handleChangedCvv}
          required={true}
          onBlur={handleError}
        />
        <TextField
          name="amount"
          id="outlined-error-helper-text"
          label="Amount"
          value={amount}
          variant="filled"
          type="number"
          onChange={handleChangedAmount}
          required={true}
          onBlur={handleError}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={Pay}
        disabled={disabled}
      >
        Оплатить
      </Button>
    </form>
  );
};
