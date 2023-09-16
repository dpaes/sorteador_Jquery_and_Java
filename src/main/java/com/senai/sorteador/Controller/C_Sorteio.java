package com.senai.sorteador.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.senai.sorteador.Service.S_Sorteio;

@Controller
public class C_Sorteio {
    @GetMapping("/")
    public String getIndex(){
        return "index";
    }

    @PostMapping("/")
    @ResponseBody
    public int[] postIndex(@RequestParam("qtdNumeros") int qtdNumeros,
                           @RequestParam("lowerRangeSorteio") int lowerRangeSorteio,
                           @RequestParam("higherRangeSorteio") int higherRangeSorteio,
                           @RequestParam("ordemCrescente") boolean ordemCrescente,
                           @RequestParam("naoRepetirNumeros") boolean naoRepetirNumeros){

        return S_Sorteio.geradorDeNumero(naoRepetirNumeros,ordemCrescente,lowerRangeSorteio,higherRangeSorteio,qtdNumeros);
    }
}
