import { I_AM, WAIT_TIME } from "../../../data/home_data";

export const generateSequence = (): any[] => {
    let sequence: any[] = [];

    I_AM.forEach((item) => {
        sequence.push(item),
            sequence.push(WAIT_TIME);
    })

    return sequence;
}
