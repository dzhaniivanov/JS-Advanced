    function solve(name, age, weight, height) {
        let bmi = () => {
            return Math.round(weight / (height / 100 * height / 100))
        };
        let status = () => {
            if (bmi() < 18.5) {
                return 'underweight';
            } else if (bmi() < 25) {
                return 'normal';
            } else if (bmi() < 30) {
                return 'overweight';
            } else if (bmi() > 30) {
                return 'obese';
            }

        }

        let patientObj = {
            name: name,
            personalInfo: {
                age,
                weight,
                height,
            },
            BMI: bmi(),
            status: status(),

        }
        if (status() === "obese") {
            patientObj.recommendation = 'admission required'
        }
        return patientObj;

    }

solve('Peter', 29, 75, 182)


