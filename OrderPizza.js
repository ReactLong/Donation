import React from 'react';
import { View, Text } from 'react-native';

import NumberPlease from 'react-native-number-please';

function OrderPizza(){
  const initialValues = [{ id: 'pizza', value: 3 }];
  const [pizzas, setPizzas] = useState(initialValues);
  const pizzaNumbers = [{ id: 'pizza', label: '🍕', min: 0, max: 99 }];

  return (
    <View>
      <Text>I would like</Text>
      {/* <NumberPlease
        pickers={pizzaNumbers}
        values={pizzas}
        onChange={(values) => setPizzas(values)}
      /> */}
    </View>
  );
};

export default OrderPizza
