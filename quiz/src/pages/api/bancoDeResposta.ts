import QuestaoModel from "@/model/questao";
import RepostaModel from "@/model/resposta";


export const questoes: QuestaoModel[] = [
    new QuestaoModel(306, "Qual bicho transmite a Doença de Chagas?", [
        RepostaModel.errada("Abelha"),
        RepostaModel.errada("Barata"),
        RepostaModel.errada("Pulga"),
        RepostaModel.certa("Barbeiro")
    ], false),
    new QuestaoModel(202, "Qual fruto é conhecido no Norte e Nordeste como jerimum?", [
        RepostaModel.errada("Caju"),
        RepostaModel.errada("Côco"),
        RepostaModel.errada("Chuchu"),
        RepostaModel.certa("Abóbora")
    ], false),
    new QuestaoModel(203, "Qual é o coletivo de cães?", [
        RepostaModel.errada("Manada"),
        RepostaModel.errada("Alcateia"),
        RepostaModel.errada("Rebanho"),
        RepostaModel.certa("Matilha")
    ], false),
    new QuestaoModel(204, "Qual é o triângulo que tem todos os lados diferentes?", [
        RepostaModel.errada("Equilátero"),
        RepostaModel.errada("Isóceles"),
        RepostaModel.errada("Trapézio"),
        RepostaModel.certa("Escaleno")
    ], false),
    new QuestaoModel(205, "Quem compôs o Hino da Independência?", [
        RepostaModel.errada("Castro Alves"),
        RepostaModel.errada("Manuel Bandeira"),
        RepostaModel.errada("Carlos Gomes"),
        RepostaModel.certa("Dom Pedro I")
    ], false),
]