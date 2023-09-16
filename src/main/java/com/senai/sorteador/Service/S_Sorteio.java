package com.senai.sorteador.Service;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Random;

@Service
public class S_Sorteio {
    public static int[] geradorDeNumero(boolean naoRepetirNumero, boolean ordemCrescente, int rangeMenor, int rangeMaior, int qtdNumeros){

        int[] resultados = new int[qtdNumeros];
        int resultado;
        boolean repetiu = false;
        Random rand = new Random();
        for(int i = 0; i < qtdNumeros; i++){

            if(!naoRepetirNumero){
                resultado = rand.nextInt(rangeMenor,rangeMaior+1);
            }else{
                do{
                    resultado = rand.nextInt(rangeMenor,rangeMaior+1);
                    int finalResultado = resultado;
                    repetiu = Arrays.stream(resultados).anyMatch(numero -> numero == finalResultado);
                }while(repetiu);
            }
            resultados[i] = resultado;
        }
        if(ordemCrescente){
            Arrays.stream(resultados).sorted();
        }
        return resultados;
    }
}
