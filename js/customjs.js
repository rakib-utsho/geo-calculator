function findAreaOfRectPara(input1, input2, base, height, heading) {
    const triangleInputFieldFloat1 = parseFloat(input1);
    const triangleInputFieldFloat2 = parseFloat(input2);
        // start calculation
    const triangleAreaResult = triangleInputFieldFloat1 * triangleInputFieldFloat2;
    const tribase = document.getElementById(base);
    tribase.innerText = triangleInputFieldFloat1;
    const triheight = document.getElementById(height); 
    triheight.innerText = triangleInputFieldFloat2;
    const triHeading = document.getElementById(heading);
    const triHeadingText = triHeading.innerText;
    const name = document.getElementById('name');
    const result = document.getElementById('result');
    name.innerText = triHeadingText;
    result.innerText = triangleAreaResult.toFixed(2);
    const olList = document.getElementById('ol-list');
    olList.style.display = 'block';
    document.getElementById('convert').addEventListener('click', function () {
        const meterSquareResult = triangleAreaResult / 10000;
        result.innerText = meterSquareResult.toFixed(3);
        const cm = document.getElementById('c');
        cm.style.display = 'none';
    })
    document.getElementById('cross-btn').addEventListener('click', function () {
        olList.style.display = 'none';
    })
}

// Rectangle
document.getElementById('rectangle-calculate').addEventListener('click', function () {
    const triangleInputField1 = document.getElementById('rec-input1');
    const triangleInputFieldValue1 = triangleInputField1.value;
    const triangleInputField2 = document.getElementById('rec-input2');
    const triangleInputFieldValue2 = triangleInputField2.value;
    // condition for validation
    if (isNaN(triangleInputFieldValue1)) {
        alert('Please Enter valid Input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else if (isNaN(triangleInputFieldValue2)) {
        alert('Please Enter valid Input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else if (triangleInputFieldValue1 === '') {
        alert('Please enter any input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else if (triangleInputFieldValue2 === '') {
        alert('Please enter any input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else {

        const recArea = findAreaOfRectPara(triangleInputFieldValue1, triangleInputFieldValue2, 'rec-base', 'rec-height', 'rectangle-heading');

        triangleInputField1.value = '';
        triangleInputField2.value = '';
    }
})
// Parrelleogram
document.getElementById('para-calculate').addEventListener('click', function () {
    const triangleInputField1 = document.getElementById('para-value1');
    const triangleInputFieldValue1 = triangleInputField1.innerText;
    const triangleInputField2 = document.getElementById('para-value2');
    const triangleInputFieldValue2 = triangleInputField2.innerText;
        // condition for validation
if (isNaN(triangleInputFieldValue1)) {
    alert('Please Enter valid Input...!');
    const olList = document.getElementById('ol-list');
    olList.style.display = 'none';
}
else if (isNaN(triangleInputFieldValue2)) {
    alert('Please Enter valid Input...!');
    const olList = document.getElementById('ol-list');
    olList.style.display = 'none';
}
else {
  
    const recArea = findAreaOfRectPara(triangleInputFieldValue1, triangleInputFieldValue2, 'para-base', 'para-height', 'para-heading');
} 
})

function AreaOfTriRhoPen(inputs1, inputs2, base1, height1, heading1) {
    const triangleInputFieldFloat1 = parseFloat(inputs1);
    const triangleInputFieldFloat2 = parseFloat(inputs2);

    const triangleAreaResult = 0.5 * triangleInputFieldFloat1 * triangleInputFieldFloat2;

    const tribase = document.getElementById(base1); 
    tribase.innerText = triangleInputFieldFloat1;

    const triheight = document.getElementById(height1); 
    triheight.innerText = triangleInputFieldFloat2;

    const triHeading = document.getElementById(heading1);
    const triHeadingText = triHeading.innerText;

    const name = document.getElementById('name');
    const result = document.getElementById('result');
    name.innerText = triHeadingText;
    result.innerText = triangleAreaResult.toFixed(2);

    const olList = document.getElementById('ol-list');
    olList.style.display = 'block';
    document.getElementById('convert').addEventListener('click', function () {
        const meterSquareResult = triangleAreaResult / 10000;
        result.innerText = meterSquareResult.toFixed(3);
        const cm = document.getElementById('c');
        cm.style.display = 'none';
    })
    
    document.getElementById('cross-btn').addEventListener('click', function () {
        olList.style.display = 'none';
    })
}

document.getElementById('triangle-calculate').addEventListener('click', function () {
    const triangleInputField1 = document.getElementById('tri-input1');
    const triangleInputFieldValue1 = triangleInputField1.value;

    const triangleInputField2 = document.getElementById('tri-input2');
    const triangleInputFieldValue2 = triangleInputField2.value;

    // Validation;
    if (isNaN(triangleInputFieldValue1)) {
        alert('Please Enter valid Input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else if (isNaN(triangleInputFieldValue2)) {
        alert('Please Enter valid Input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else if (triangleInputFieldValue1 === '') {
        alert('Please enter any input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else if (triangleInputFieldValue2 === '') {
        alert('Please enter any input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else {
        const areaOfTriangle = AreaOfTriRhoPen(triangleInputFieldValue1, triangleInputFieldValue2, 'tri-base', 'tri-height', 'tri-heading');
        triangleInputField1.value = '';
        triangleInputField2.value = '';
    }
})


document.getElementById('calculate-pentagon').addEventListener('click', function () {
 
    const triangleInputField1 = document.getElementById('penta-value1');
    const triangleInputFieldValue1 = triangleInputField1.innerText;


  
    const triangleInputField2 = document.getElementById('penta-value2');
    const triangleInputFieldValue2 = triangleInputField2.innerText;


    // Validation;
    if (isNaN(triangleInputFieldValue1)) {
        alert('Please Enter valid Input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else if (isNaN(triangleInputFieldValue2)) {
        alert('Please Enter valid Input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }

    else {

      
        const pentagonArea = AreaOfTriRhoPen(triangleInputFieldValue1, triangleInputFieldValue2, 'penta-base', 'penta-height', 'penta-heading');
    }
})

document.getElementById('rombhos-calculate').addEventListener('click', function () {
  
    const romInputField1 = document.getElementById('rom-value1');
    const romInputFieldValue1 = romInputField1.innerText;
 
    const romInputField2 = document.getElementById('rom-value2');
    const romInputFieldValue2 = romInputField2.innerText;
    // Validation;
    if (isNaN(romInputFieldValue1)) {
        alert('Please Enter valid Input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else if (isNaN(romInputFieldValue2)) {
        alert('Please Enter valid Input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else {
      
        const rhombosArea = AreaOfTriRhoPen(romInputFieldValue1, romInputFieldValue2, 'rom-base', 'rom-height', 'rom-heading');
    }
})
// Calculate Ellipse
document.getElementById('ell-calculate').addEventListener('click', function () {

    const ellInputField1 = document.getElementById('ell-value1');
    const ellInputFieldValue1 = ellInputField1.innerText;
    const ellInputFieldFloat1 = parseFloat(ellInputFieldValue1);

    const ellInputField2 = document.getElementById('ell-value2');
    const ellInputFieldValue2 = ellInputField2.innerText;
    const ellInputFieldFloat2 = parseFloat(ellInputFieldValue2);

    // Validation;
    if (isNaN(ellInputFieldValue1)) {
        alert('Please Enter valid Input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }
    else if (isNaN(ellInputFieldValue2)) {
        alert('Please Enter valid Input...!');
        const olList = document.getElementById('ol-list');
        olList.style.display = 'none';
    }

    else {

 
        const triangleAreaResult = 3.1416 * ellInputFieldFloat1 * ellInputFieldFloat2;

        const tribase = document.getElementById('ell-base');
        tribase.innerText = ellInputFieldValue1;

        const triheight = document.getElementById('ell-height');
        triheight.innerText = ellInputFieldValue2;

    
        const triHeading = document.getElementById('ell-heading');
        const triHeadingText = triHeading.innerText;
    
        const name = document.getElementById('name');
        const result = document.getElementById('result');

        name.innerText = triHeadingText;
        result.innerText = triangleAreaResult.toFixed(2);

        const olList = document.getElementById('ol-list');
        olList.style.display = 'block';

        // Convert to Meter square::
        document.getElementById('convert').addEventListener('click', function () {
            const meterSquareResult = triangleAreaResult / 10000;
            result.innerText = meterSquareResult.toFixed(3);
            const cm = document.getElementById('c');
            cm.style.display = 'none';
        })

        document.getElementById('cross-btn').addEventListener('click', function () {
            olList.style.display = 'none';
        })

    }

})

// ::::::DONE::::::

