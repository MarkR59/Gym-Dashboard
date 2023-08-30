import { useState } from 'react';

const Macros = () => {
  const [form, setForm] = useState({
    age: '',
    weight: '',
    height: '',
    gender: 'male',
    activity: 'sedentary',
    goal: 'loss',
  });

  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { age, weight, height, gender, activity, goal } = form;

    const BMR =
      10 * weight + 6.25 * height - 5 * age + (gender === 'male' ? 5 : -161);

    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      heavy: 1.725,
    };

    const TDEE = BMR * activityMultipliers[activity];

    const adjustmentFactors = {
      loss: 0.85,
      maintain: 1,
      gain: 1.15,
    };

    const dailyCalories = TDEE * adjustmentFactors[goal];
    const protein = weight;
    const fats = (dailyCalories * 0.25) / 9;
    const carbs = (dailyCalories - (protein * 4 + fats * 9)) / 4;

    setResults({ protein, fats, carbs });
  };

  return (
    <div className="form-container">
      <label className='node-label'>Macros Calculator</label>
      <form onSubmit={handleSubmit}>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          className="input"
          required
        />
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          name="weight"
          value={form.weight}
          onChange={handleChange}
          className="input"
          required
        />
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          name="height"
          value={form.height}
          onChange={handleChange}
          className="input"
          required
        />
        <label htmlFor="gender">Gender:</label>
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="input"
          required
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label htmlFor="activity">Activty:</label>
        <select
          name="activity"
          value={form.activity}
          onChange={handleChange}
          className="input"
          required
        >
          <option value="sedentary">Sedentary</option>
          <option value="light">Light</option>
          <option value="moderate">Moderate</option>
          <option value="heavy">Heavy</option>
        </select>
        <label htmlFor="goal">Goal:</label>
        <select
          name="goal"
          value={form.goal}
          onChange={handleChange}
          className="input"
          required
        >
          <option value="loss">Loss</option>
          <option value="maintain">Maintain</option>
          <option value="Gain">Gain</option>
        </select>
        <input type="submit" className="input" value="Calculate" />
      </form>
      {results && (
        <div>
          Proteins: {results.protein}g <br />
          Fats: {results.fats}g <br />
          Carbs: {results.carbs}g
        </div>
      )}
    </div>
  );
};

export default Macros;
