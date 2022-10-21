function trekking (input) {

    let groupsCount = Number(input[0]);

    let musala = 0;
    let montblanc = 0;
    let kilima = 0;
    let k2 = 0;
    let everest = 0;

    let totalPeople = 0;
    let musalaPeople = 0;
    let montblancPeople = 0;
    let kilimaPeople = 0;
    let k2People = 0;
    let everestPeople = 0;
    let group = 0;
    
    for (let index = 1; index <= groupsCount; index++) {
       group = Number(input[index]);

       if (group <= 5) {
        musala += group;
       }else if (group <= 12) {
        montblanc += group;
       }else if (group <= 25) {
        kilima += group;
       }else if (group <= 40) {
        k2 += group;
       }else if (group >= 41) {
        everest += group;
       }
       totalPeople += group;
    }

    musalaPeople = (musala/totalPeople)*100;
    montblancPeople = (montblanc/totalPeople)*100;
    kilimaPeople = (kilima/totalPeople)*100;
    k2People = (k2/totalPeople)*100;
    everestPeople = (everest/totalPeople)*100;

    console.log(`${musalaPeople.toFixed(2)}%`)
    console.log(`${montblancPeople.toFixed(2)}%`)
    console.log(`${kilimaPeople.toFixed(2)}%`)
    console.log(`${k2People.toFixed(2)}%`)
    console.log(`${everestPeople.toFixed(2)}%`)
}
trekking(['10','10','5','1','100','12','26','17','37','40','78'])
