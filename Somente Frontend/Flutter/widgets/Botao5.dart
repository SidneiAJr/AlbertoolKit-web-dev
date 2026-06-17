import 'package:flutter/material.dart';

class Botao6 extends StatelessWidget {
  const Botao6({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.symmetric(horizontal:20,vertical:12),
        decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(8)
        ),
         child: Text('Hello')
    );
  }
}
