export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
  }).format(number);
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  return ['all', ...new Set(unique)];
};

export const formField = (name, type, data, action, disabled) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        value={data}
        type={type}
        name={name}
        onChange={action}
        disabled={disabled}
      />
    </>
  );
};