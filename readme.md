CustomForm Component

<CustomForm /> adalah komponen yang dinamis dan fleksibel untuk membuat form berdasarkan konfigurasi properti yang diberikan. Komponen ini memudahkan Anda untuk membuat form dengan berbagai tipe input seperti text, select, number, date, radio, dan checkbox.

Installation
Instalasi package ini dapat dilakukan dengan perintah berikut:
npm install https://github.com/Muhaca/simpel-package.git


Usage
Berikut adalah contoh penggunaan komponen CustomForm:

Dummy Data Setup
Anda perlu mendefinisikan dua array: dummyMap dan dummyItem. Keduanya akan menentukan jenis input dan properti yang digunakan di dalam form.

import React, { useState } from 'react';
import CustomForm from '@username/customform';

const dummyMap = [
  { label: 'single text', value: 'single_text' },
  { label: 'multi text', value: 'multi_text' },
  { label: 'number', value: 'number' },
  { label: 'gender', value: 'select' },
  { label: 'phone number', value: 'phone_number' },
  { label: 'date', value: 'date' },
  { label: 'radio', value: 'radio' },
  { label: 'checkbox', value: 'checkbox' }
];

const dummyItem = [
  { label: 'name', property: 'single_text', option: null },
  { label: 'note', property: 'select', option: null },
  { label: 'age', property: 'number', option: null },
  { label: 'gender', property: 'select', option: null },
  { label: 'phone', property: 'phone_number', option: null },
  { label: 'brith', property: 'date', option: null },
  { label: 'married', property: 'radio', option: null },
  { label: 'child', property: 'checkbox', option: null }
];

const App = () => {
  const [addField, setAddField] = useState(dummyItem);

  return (
    <div>
      <h1>Dynamic Form</h1>
      <CustomForm state={addField} setState={setAddField} propertyOption={dummyMap} />
    </div>
  );
};

export default App;