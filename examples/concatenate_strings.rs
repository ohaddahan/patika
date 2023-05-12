// https://cohorts.patika.dev/cohortDetails/rust-and-fullstack-solana-development/submission/9wibnZFB8dFrufAJT

fn concatenate_strings(s1: &str, s2: &str) -> String {
    let mut result = String::from(s1);
    result.push_str(s2);
    result
}

fn main() {
    let s1 = "Hello";
    let s2 = "Patika";

    let concatenated_string = concatenate_strings(&s1, &s2);
    println!("{}", concatenated_string);
}

