import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";


export const questoes: QuestaoModel[] = [
    new QuestaoModel(306, "Qual bicho transmite a Doença de Chagas?", [
        RespostaModel.errada("Abelha"),
        RespostaModel.errada("Barata"),
        RespostaModel.errada("Pulga"),
        RespostaModel.certa("Barbeiro")
    ], false),
    new QuestaoModel(202, "Qual fruto é conhecido no Norte e Nordeste como jerimum?", [
        RespostaModel.errada("Caju"),
        RespostaModel.errada("Côco"),
        RespostaModel.errada("Chuchu"),
        RespostaModel.certa("Abóbora")
    ], false),
    new QuestaoModel(203, "Qual é o coletivo de cães?", [
        RespostaModel.errada("Manada"),
        RespostaModel.errada("Alcateia"),
        RespostaModel.errada("Rebanho"),
        RespostaModel.certa("Matilha")
    ], false),
    new QuestaoModel(204, "Qual é o triângulo que tem todos os lados diferentes?", [
        RespostaModel.errada("Equilátero"),
        RespostaModel.errada("Isóceles"),
        RespostaModel.errada("Trapézio"),
        RespostaModel.certa("Escaleno")
    ], false),
    new QuestaoModel(205, "Quem compôs o Hino da Independência?", [
        RespostaModel.errada("Castro Alves"),
        RespostaModel.errada("Manuel Bandeira"),
        RespostaModel.errada("Carlos Gomes"),
        RespostaModel.certa("Dom Pedro I")
    ], false),
]