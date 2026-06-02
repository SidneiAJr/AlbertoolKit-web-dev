import 'package:flutter/material.dart';

class Avatar extends StatelessWidget {
  final double tamanho;
  final Color corFundo;
  final String texto;

  const Avatar({
    super.key,
    this.tamanho = 50,
    this.corFundo = Colors.red,
    this.texto = 'AVATAR',
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: tamanho,
      height: tamanho,
      decoration: BoxDecoration(
        color: corFundo,
        borderRadius: BorderRadius.circular(tamanho / 2),
      ),
      child: Center(
        child: Text(
          texto,
          style: TextStyle(
            color: Colors.white,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
    );
  }
}
