import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import styled from '@emotion/styled';

const schema = yup.object().shape({
  amount: yup
    .number()
    .min(1)
    .positive()
    .integer()
    .required(),
  currency: yup.string().required(),
});

const Button = styled('button')`
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  color: #fff;
  background: green;
  &:disabled {
    background: #ccc;
  }
`;

const BottomContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
`;

const FormStyled = styled('form')`
  display: block;
`;

const InputContainer = styled('div')`
  flex: 1;
`;

const Container = styled('div')`
  display: flex;
`;

const FormContainer = styled('div')`
  display: flex;
  flex: 2;
`;

const RatesInfoContainer = styled('div')`
  flex: 1;
`;

const OptionForm = ({ isPooling, startPooling }) => {
  return (
    <Formik
      initialValues={{ currency: 'eur', amount: 0 }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          startPooling();
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <FormStyled onSubmit={handleSubmit}>
          <Container>
            <FormContainer>
              <InputContainer>
                <label>Валюта</label>
                <select
                  name="currency"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currency}
                >
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                  <option value="rub">RUB</option>
                </select>
                {errors.currency && touched.currency && errors.currency}
              </InputContainer>
              <InputContainer>
                <label>Сумма</label>
                <input
                  type="amount"
                  name="amount"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amount}
                />
                {errors.amount && touched.amount && errors.amount}
              </InputContainer>
              <hr />
            </FormContainer>
            <RatesInfoContainer>
              <h3>Текущие индексы</h3>
              <div>USD</div>
              <div>EUR</div>
              <div>RUB</div>
            </RatesInfoContainer>
          </Container>
          <hr />
          <BottomContainer>
            <Button
              type="submit"
              disabled={
                isPooling ||
                isSubmitting ||
                (touched && (errors.amount || errors.currency))
              }
            >
              {isSubmitting
                ? 'Сабмитим форму'
                : isPooling
                ? 'Ожидаем изменения ставок'
                : 'Сделать ставку'}
            </Button>
          </BottomContainer>
        </FormStyled>
      )}
    </Formik>
  );
};
export default OptionForm;
