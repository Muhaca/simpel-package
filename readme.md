# CustomForm Component

CustomForm adalah komponen yang dinamis dan fleksibel untuk membuat form berdasarkan konfigurasi properti yang diberikan. Komponen ini memudahkan Anda untuk membuat form dengan berbagai tipe input seperti text, select, number, date, radio, dan checkbox.

## Installation
Instalasi package ini dapat dilakukan dengan perintah berikut:

```bash
npm install https://github.com/Muhaca/simpel-package.git
```

## Usage
Anda perlu mendefinisikan dua array: dummyMap dan dummyItem. Keduanya akan menentukan jenis input dan properti yang digunakan di dalam form.

```javascript
import React, { useState } from 'react';
import CustomForm from '@muhaca/sample-package';

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
```

## Props
state: Array dari field yang ingin Anda tambahkan ke form. Setiap item dalam array harus memiliki properti label, property, dan option.
setState: Fungsi untuk memperbarui state yang berisi field form.
propertyOption: Array yang mendefinisikan tipe input yang tersedia dalam form, seperti single_text, number, select, dll.
Contoh Output
Form yang dihasilkan akan dinamis berdasarkan data yang Anda berikan, dengan input tipe text, select, radio, checkbox, dll.

## Customization
Anda bisa menyesuaikan data dalam dummyMap dan dummyItem untuk membuat berbagai variasi form dengan input yang berbeda. Misalnya, Anda dapat menambahkan lebih banyak properti atau tipe input baru sesuai kebutuhan.

## Contributing
Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)