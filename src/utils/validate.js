function validate(original, steps, target){
    let last = [...original];
    let current = [...last];   
    
    steps.forEach(step => {
        let i = 0;
        for(i = 0; i < 4; i++) {
            current[i] = last[step[i]]
        }
        last = [...current];
    });

    let i = 0;
    for(i = 0; i < 4; i++)
    {
        if (last[i] !== target[i])
            return false;
    }

    return true;
}

export default validate;